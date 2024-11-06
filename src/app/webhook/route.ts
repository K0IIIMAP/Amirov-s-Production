import stripe from "@/lib/stripe";
import { writeClient } from "@/sanity/lib/write-client";
import { CART_BY_ID, HISTORY_BY_ID } from "@/sanity/query";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();

  const sig = headersList.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Stripe webhook secret is not set " },
      { status: 400 }
    );
  }
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    console.log("Received event type:", event.type); // Log every event type
  } catch (error) {
    console.error("Webhook sginature failed:", error);
    return NextResponse.json(
      { error: "Webhook signature failed" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata!.userId; // Access the userId from metadata
    console.log("Checkout session completed FINALLY WE ARE HERE ");
    console.log("User ID: ", userId);
    const usersCart = (await writeClient.fetch(CART_BY_ID, { id: userId }))
      .cart;
    const usersHistory = (
      await writeClient.fetch(HISTORY_BY_ID, { id: userId })
    ).history;
    const newHistory = [...usersHistory, ...usersCart];

    await writeClient.mutate([
      {
        patch: {
          query: `*[_type == "customer" && googleId == $id][0]`, // Find document with googleId matching id
          set: { cart: [], history: newHistory }, // Update the cart field
          params: { id: userId }, // THIS IS A PARAM THAT WE PAss OF SESSION.USER.ID
        },
      },
    ]);
    console.log("cart is cleared");
  }

  return NextResponse.json({ received: true });
}
