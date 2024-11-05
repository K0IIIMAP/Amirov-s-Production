"use client";

import { useIndicator } from "@/app/contexts/indicator-context-provider";
import { deleteFromCart } from "@/lib/actions";
import { CircleX } from "lucide-react";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function DeleteBtn({ slug }: { slug: string }) {
  const [response, formAction, isPending] = useActionState(
    deleteFromCart,
    null
  );
  const { indicator, setIndicator } = useIndicator();

  const handleDelete = async () => {
    // Immediately set the indicator to 0 before the deletion process starts

    setIndicator((prev) => prev - 1);
    formAction(slug);
  };

  return (
    <form action={() => handleDelete()}>
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
