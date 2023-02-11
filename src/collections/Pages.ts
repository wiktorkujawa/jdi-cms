import { CollectionConfig } from "payload/types";
import { WYSIWYG, Quote } from "../fields/components";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "Name",
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
      // minRows: 0,
      maxRows: 20,
      blocks: [
        // required
        WYSIWYG,
        Quote
      ],
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Pages;
