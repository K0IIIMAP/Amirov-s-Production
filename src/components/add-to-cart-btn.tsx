"use client";
import React, { useActionState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { addToCart } from "@/lib/actions";
import { useIndicator } from "@/app/contexts/indicator-context-provider";

export default function AddToCartBtn({ slug }: { slug: string }) {
  const session = useSession();
  const { indicator, setIndicator } = useIndicator();
  const id = session?.user?.id;
  const [response, formAction, isPending] = useActionState(addToCart, null);

  useEffect(() => {
    if (response === "Product successfully added to cart") {
      setIndicator((prev) => prev + 1);
    }
  }, [response]);

  return (
    <form
      className="flex items-center mt-[10px]"
      action={async () => {
        formAction(slug);
        //! TODO FIND THE WAY TO SHOW TOAST BUT GOTTA FIGURE OUT HOW TO PASS PROPR AND AWAIT DONT WORK ON FORM AXTIOn
      }}
    >
      <button
        disabled={isPending}
        className="w-[122px] h-[29px] text-[14px] bg-accent disabled:bg-accent/50 "
      >
        Add to cart
      </button>

      {isPending && <div className="spinner ml-3"></div>}

      {response === "Product successfully added to cart" ? (
        <p className="text-[14px] ml-3 text-green-500">{response}</p>
      ) : response === "Product is already in cart" ||
        response === "Log in to add to cart" ||
        response === "Server side error occurred" ? (
        <p className="text-[14px] ml-3 text-red-500">{response}</p>
      ) : (
        ""
      )}
    </form>
  );
}
