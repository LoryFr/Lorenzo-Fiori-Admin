import type { CollectionConfig } from "payload";
import { schema } from "./schema";

export const Projects: CollectionConfig = {
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  slug: "projects",
  fields: schema,
};
