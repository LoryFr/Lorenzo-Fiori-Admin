import type { CollectionConfig } from "payload";
import { schema } from "./schema";

export const Users: CollectionConfig = {
  admin: {
    useAsTitle: "name",
  },
  slug: "users",
  fields: schema,
  auth: true,
};
