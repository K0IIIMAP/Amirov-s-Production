import { type SchemaTypeDefinition } from "sanity";

import { sexType } from "./category";
import { productType } from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sexType, productType],
};
