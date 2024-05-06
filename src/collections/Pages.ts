import { CollectionConfig } from "payload/types";
import { WYSIWYG, Quote, Banner, HeadingCopyBlock, HeadingBlock } from "../fields/components";
import { MastheadSlider } from "../fields/elements";
import { Slider } from "../fields/components";


const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [async ({ doc }) => {
      await fetch(`${process.env.APP_URL}api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: doc.slug || '/'
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
      name: "isMasthead",
      type: "checkbox",
      defaultValue: false,
    },
    MastheadSlider,
    {
      name: "customComponents",
      type: "blocks",
      maxRows: 20,
      blocks: [
        WYSIWYG,
        Quote,
        Banner,
        HeadingCopyBlock,
        HeadingBlock,
        Slider
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
