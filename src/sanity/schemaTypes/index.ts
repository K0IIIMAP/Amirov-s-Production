import { type SchemaTypeDefinition } from "sanity";

import { sexType } from "./category";
import { productType } from "./product";
import { customerType } from "./customer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sexType, productType, customerType],
};
