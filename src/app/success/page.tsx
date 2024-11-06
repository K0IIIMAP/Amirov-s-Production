import Link from "next/link";

import React from "react";

export default function SuccessPage() {
  return (
    <main className="h-[80vh]">
      <div className="flex flex-col items-center justify-center bg-green-100 h-full mt-10">
        <h1 className="text-3xl font-bold text-green-700 max-md:text-[20px]">
          Payment Successful!
        </h1>
        <p className="mt-4 text-lg text-green-600 text-center px-[5%] max-md:text-[16px]">
          Thank you for your purchase. Your payment was successful.
        </p>
        <Link href="/" className="mt-6 text-black ">
          Main Page
        </Link>
        <Link href="/history" className="mt-1 text-black ">
          Orders
        </Link>
      </div>
    </main>
  );
}
