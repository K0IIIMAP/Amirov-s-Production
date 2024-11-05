import { defineField, defineType } from "sanity";

export const customerType = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    defineField({
      name: "googleId",
      type: "string",
      title: "Google ID",
    }),
    defineField({
      name: "name",
      type: "string",
      title: "name",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "email",
    }),
    defineField({
      name: "cart",
      type: "array",
      title: "Cart",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "history",
      type: "array",
      title: "History of purchased products",
      of: [{ type: "string" }],
    }),
  ],
});
