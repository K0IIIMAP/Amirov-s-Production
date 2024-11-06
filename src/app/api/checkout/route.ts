import stripe from "@/lib/stripe";
import { calculateUnitAmount } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Receive the checkout data
    const { flattenedProducts, id } = await request.json();

    // Fetch all the products from Stripe that are already added
    // initial check
    const existingProducts = await stripe.products.list({
      active: true,
      limit: 100, // Adjust as needed
    });

    // by now eveyrhting is working fine
    // Add a product to Stripe's products table if it doesn't exist

    for (const product of flattenedProducts) {
      const productExists = existingProducts.data.some(
        (existingProduct) => existingProduct.name === product.title
      );
      if (!productExists) {
        await stripe.products.create({
          name: product.title,

          default_price_data: {
            currency: "usd",
            unit_amount: calculateUnitAmount(product),
          },
          images: [product.images.asset.url],
        });
      }
    }
    // Refetch existing products to include newly created ones
    const updatedProducts = await stripe.products.list({
      active: true,
      limit: 100,
    });
    const stripeCheckoutProducts = [];
    for (const product of flattenedProducts) {
      const existingProduct = updatedProducts.data.find(
        (existingProd) => existingProd.name === product.title
      );

      if (existingProduct) {
        // console.log("Existing product FINALL found:  ", existingProduct);
        stripeCheckoutProducts.push({
          price: existingProduct.default_price, // Reference to the default price ID
          quantity: 1,
        });
      }
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      line_items: stripeCheckoutProducts,
      mode: "payment",
      metadata: {
        userId: id, // Pass the user ID in the metadata
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("Checkout error:", error);

    // Ensure you return a response even when an error occurs
    return NextResponse.json(
      { error: "An error occurred during checkout." },
      { status: 500 }
    );
  }
}
