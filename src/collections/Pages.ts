import { CollectionConfig } from "payload/types";
import { WYSIWYG, Quote } from "../fields/components";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      unique: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true
    },
    {
      name: "customComponents",
      type: "blocks",
      maxRows: 20,
      blocks: [
        WYSIWYG,
        Quote
      ],
    }
  ],
};

export default Pages;
