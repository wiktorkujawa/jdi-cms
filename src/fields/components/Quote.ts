import { Block } from "payload/types";

const Quote: Block = {
  slug: 'quote', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  fields: [ // required
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'quote',
      type: 'text',
      required: true,
    },
    {
      name: 'decoration',
      type: 'checkbox'
    },
  ]
};

export default Quote;