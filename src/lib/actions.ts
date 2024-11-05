"use server";

import { auth, signOut } from "@/auth";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { CART_BY_ID } from "@/sanity/query";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addToCart = async (prevState, slug: string) => {
  const session = await auth();

  try {
    if (!session?.user) return "Log in to add to cart";
    const id = session.user.id;
    //! BE CAREFUL ABOUT THE BUG WHEN CLEARING THE CART, THEN IT IS NULL. NOT []
    // get the existing cart
    let cartObject = await client.fetch(CART_BY_ID, { id });
    if (cartObject.cart === null || undefined) cartObject.cart = [];

    // console.log("cartObject is:");
    // console.log(cartObject);

    if (cartObject.cart.includes(slug)) {
      // console.log("Product is already in cart");
      return "Product is already in cart";
    }

    // add a mew product to the cart
    const updatedCart = [...cartObject.cart, slug];

    console.log("cart is updated:");
    // console.log(updatedCart);
    await writeClient.mutate([
      {
        patch: {
          query: `*[_type == "customer" && googleId == $id][0]`, // Find document with googleId matching id
          set: { cart: updatedCart }, // Update the cart field
          params: { id }, // THIS IS A PARAM THAT WE PATT OF SESSION.USER.ID
        },
      },
    ]);
    // console.log("we are here");
    return "Product successfully added to cart";
  } catch (error) {
    console.log(error);
    return "Server side error occured";
  }
};

export const deleteFromCart = async (prevState, slug: string) => {
  const session = await auth();
  if (!session?.user) redirect("/");
  const id = session.user.id;

  let cartObject = await client.fetch(CART_BY_ID, { id });
  if (!cartObject.cart) return;
  const cartWithoutDeletedItem = (cartObject.cart = cartObject.cart.filter(
    (item) => item !== slug
  ));

  await writeClient.mutate([
    {
      patch: {
        query: `*[_type == "customer" && googleId == $id][0]`, // Find document with googleId matching id
        set: { cart: cartWithoutDeletedItem }, // Update the cart field
        params: { id }, // THIS IS A PARAM THAT WE PATT OF SESSION.USER.ID
      },
    },
  ]);
  console.log("Product successfully deleted from cart");
  revalidatePath("/cart");
  return "Deleted";
};

export const signUserOut = async () => {
  await signOut({ callbackUrl: "/" });
};
