import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  // admin: {
  //   useAsTitle:
  // },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    disableLocalStorage: true,
    // adminThumbnail: "thumbnail",
  },
  fields: [],
};

export default Media;
