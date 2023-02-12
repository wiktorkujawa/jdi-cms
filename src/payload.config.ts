import { buildConfig } from "payload/config";
import path from "path";
import { Users, Media, Pages } from "./collections";
import Projects from "./collections/Projects";
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  plugins: [cloudinaryPlugin()],
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Pages,
    Media,
    Projects
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
