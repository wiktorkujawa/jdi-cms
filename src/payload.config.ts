import { buildConfig } from "payload/config";
import path from "path";
import { Users, Media, Pages, Projects, Socials } from "./collections";
import { Navigation, Footer, Experience, Education, Brief } from "./globals";

import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import seo from "@payloadcms/plugin-seo";

export default buildConfig({
  rateLimit: {
    trustProxy: true,
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  plugins: [
    cloudinaryPlugin(),
    seo({
      collections: ["pages"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => {
        return `just-dev-it.com — ${doc?.name?.value}`;
      },
      generateDescription: ({ doc }) => {
        return "Lorem ipsum";
      },
      generateURL: ({ doc, locale }) =>
        `https://just-dev-it.com/${doc?.fields?.slug?.value}`,
    }),
  ],
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages, Media, Projects, Socials],
  globals: [Navigation, Footer, Brief, Experience, Education],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  upload: {
    limits: {
      fileSize: 1000000, // 1MB, written in bytes
    },
  },
});
