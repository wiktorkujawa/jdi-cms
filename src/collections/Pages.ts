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
  hooks: {
    afterChange: [async ({doc}) => { 
      await fetch(`${process.env.APP_URL}api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: doc.slug
        })
      })
    
    }]
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
    },
    {
      name: 'subpages',
      type: 'relationship',
      relationTo: 'pages',
      hasMany: true
    }
  ],
};

export default Pages;
