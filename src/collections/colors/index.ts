import type { CollectionConfig } from "payload";
import { schema } from "./schema";

export const Colors: CollectionConfig = {
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  slug: "colors",
  fields: schema,
};
