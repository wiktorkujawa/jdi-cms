import { CollectionConfig } from "payload/types";
import { WYSIWYG, Quote, Banner, HeadingCopyBlock, HeadingBlock } from "../fields/components";

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
        Quote,
        Banner,
        HeadingCopyBlock,
        HeadingBlock
      ],
    }
  ],
};

export default Pages;
