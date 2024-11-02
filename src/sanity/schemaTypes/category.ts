import { defineField, defineType } from "sanity";

export const sexType = defineType({
  name: "sex",
  title: "Sex",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      options: {
        list: [
          { title: "Men", value: "men" },
          { title: "Women", value: "women" },
          { title: "Unisex", value: "unisex" },
        ],
      },

      validation: (rule) => rule.required(),
    }),
  ],
});
