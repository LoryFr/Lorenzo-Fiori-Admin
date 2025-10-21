import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { VercelBlob } from "./src/config/vercel-blob";
import { Media } from "./src/collections/media";
import { Users } from "./src/collections/users";
import { Projects } from "./src/collections/projects";

export default buildConfig({
  serverURL: process.env.PAYLOAD_ENDPOINT || "http://localhost:3000",
  editor: lexicalEditor(),
  collections: [Users, Media, Projects],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
    idType: "uuid",
  }),
  plugins: [VercelBlob],
});
