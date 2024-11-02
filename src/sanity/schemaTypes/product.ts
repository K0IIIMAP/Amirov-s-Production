import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Apparel", value: "apparel" },
          { title: "Accessories", value: "accessories" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "discount",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sex",
      title: "Sex",
      type: "reference",
      to: [{ type: "sex" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
