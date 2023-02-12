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
    },
    {
      name: "slug",
      type: "text",
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
