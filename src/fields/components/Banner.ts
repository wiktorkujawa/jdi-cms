import { Block } from "payload/types";

const Banner: Block = {
  slug: 'Banner', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  fields: [ // required
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        {
          label: 'fire',
          value: 'fire'
        },
        {
          label: 'new',
          value: 'new'
        },
      ]
    },
    {
      name: 'decoration',
      type: 'select',
      options: [
        {
          label: 'fire',
          value: 'fire'
        },
        {
          label: 'new',
          value: 'new'
        },
      ]
    },
  ]
};

export default Banner;