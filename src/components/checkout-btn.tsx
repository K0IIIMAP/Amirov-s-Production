"use client";

import { useState } from "react";

import { toast } from "sonner";

export default function CheckoutBtn({
  flattenedProducts,

  id,
}: {
  products: [];
  total: number;
  id: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  console.log(flattenedProducts);
  async function checkout() {
    try {
      // sending the cart items to the checkout endpoint
      setIsLoading(true);
      console.log(flattenedProducts);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flattenedProducts,
          id,
        }),
      });
      if (!response.ok) {
        // Handle errors based on status
        const errorData = await response.json();
        setIsLoading(false);

        throw new Error(
          `Checkout failed: ${errorData.error || "Unknown error"}`
        );
      } else {
        const data = await response.json();

        window.location.href = data.url; // Use this URL to redirect the user to Stripe
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, try again later!", {
        style: { backgroundColor: "red", border: "none", color: "white" },
      });
    }
  }
  return (
    <div className="flex gap-x-2 items-center">
      {isLoading && <div className="spinner"></div>}
      <button
        onClick={checkout}
        disabled={isLoading}
        className="disabled:bg-black/30 w-[250px] h-[40px] bg-black hover:bg-black/60 text-accent max-md:text-[14px] text-[20px]"
      >
        {isLoading ? "Processing..." : `Checkout`}
      </button>
    </div>
  );
}
