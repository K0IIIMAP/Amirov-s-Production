"use client";

import { deleteFromCart } from "@/lib/actions";
import { CircleX } from "lucide-react";
import React, { useActionState } from "react";

export default function DeleteBtn({ slug }: { slug: string }) {
  const [response, formAction, isPending] = useActionState(
    deleteFromCart,
    null
  );
  return (
    <form action={() => formAction(slug)}>
      {!isPending ? (
        <button
          type="submit"
          className="absolute right-[0px] top-[-35px] cursor-pointer hover:bg-black/10 transition rounded-full"
        >
          <CircleX />
        </button>
      ) : (
        <div className="spinner right-[0px] top-[-35px] absolute"></div>
      )}
    </form>
  );
}
