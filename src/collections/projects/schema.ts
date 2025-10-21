import type { Field } from "payload";
import { lexicalHTMLField } from "@payloadcms/richtext-lexical";

export const schema: Field[] = [
  {
    name: "title",
    type: "text",
    admin: {
      position: "sidebar",
    },
  },
  {
    name: "slug",
    type: "text",
    unique: true,
    admin: {
      position: "sidebar",
    },
  },
  {
    name: "description",
    type: "textarea",
    admin: {
      position: "sidebar",
    },
  },
  {
    name: "date",
    type: "date",
    admin: {
      position: "sidebar",
    },
  },
  {
    name: "image",
    type: "upload",
    relationTo: "media",
    admin: {
      position: "sidebar",
    },
  },
  {
    label: null,
    name: "details",
    type: "group",
    admin: {
      position: "sidebar",
    },
    fields: [
      {
        name: "role",
        type: "text",
      },
      {
        name: "client",
        type: "text",
      },
      {
        name: "year",
        type: "text",
      },
      {
        name: "tools",
        type: "text",
      },
    ],
  },
  {
    name: "content",
    type: "richText",
  },
  lexicalHTMLField({
    htmlFieldName: "content_html",
    lexicalFieldName: "content",
  }),
];
