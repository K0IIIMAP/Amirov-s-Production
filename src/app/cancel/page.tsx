import React from "react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="h-[80vh]">
      <div className="flex flex-col items-center justify-center bg-red-100 h-full mt-10">
        <h1 className="text-3xl font-bold text-red-700 max-md:text-[20px]">
          Payment Cancelled
        </h1>
        <p className="mt-4 text-lg text-red-600 text-center px-[5%] max-md:text-[16px]">
          Your payment was cancelled. Please try again.
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
