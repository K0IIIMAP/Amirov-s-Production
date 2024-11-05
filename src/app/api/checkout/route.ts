import stripe from "@/lib/stripe";
import { calculateUnitAmount } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Receive the checkout data
    const { flattenedProducts } = await request.json();
    // Fetch all the products from Stripe that are already added
    const existingProducts = await stripe.products.list({
      active: true,
      limit: 100, // Adjust as needed
    });

    // Add a product to Stripe's products table if it doesn't exist
    for (const product of flattenedProducts) {
      const productExists = existingProducts.data.some(
        (existingProduct) => existingProduct.name === product.title
      );
      if (!productExists) {
        await stripe.products.create({
          name: product.title,
          description: product.description,
          default_price_data: {
            currency: "usd",
            unit_amount: calculateUnitAmount(product),
          },
          images: [product.images.asset.url],
        });
      }
    }

    const stripeCheckoutProducts = [];
    for (const product of flattenedProducts) {
      const existingProduct = existingProducts.data.find(
        (existingProduct) => existingProduct.name === product.title
      );

      if (existingProduct) {
        stripeCheckoutProducts.push({
          price: existingProduct.default_price, // Reference to the default price ID
          quantity: 1,
        });
      }
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
      line_items: stripeCheckoutProducts,
      mode: "payment",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    // Ensure you return a response even when an error occurs
    return NextResponse.json(
      { error: "An error occurred during checkout." },
      { status: 500 }
    );
  }
}
