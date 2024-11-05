"use client";

import { useState } from "react";

export default function CheckoutBtn({
  flattenedProducts,
  total,
  id,
}: {
  products: [];
  total: number;
  id: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function checkout() {
    try {
      // sending the cart items to the checkout endpoint
      // setIsLoading(true);
      console.log(flattenedProducts);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flattenedProducts,
        }),
      });
      if (!response.ok) {
        // Handle errors based on status
        const errorData = await response.json();
        console.error("Error:", errorData.error);
      } else {
        const data = await response.json();
        window.location.href = data.url; // Use this URL to redirect the user to Stripe
      }
    } catch (error) {}
  }
  return (
    <>
      {/* {isLoading && <div className="spinner"></div>} */}
      <button
        onClick={checkout}
        className="w-[250px] h-[40px] bg-black hover:bg-black/60 text-accent max-md:text-[14px] text-[20px]"
      >
        Check Out
      </button>
    </>
  );
}
