import { Block } from "payload/types";

const WYSIWYG: Block = {
  slug: 'WYSIWYG', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'WYSIWYG component',
  fields: [ // required
    {
      name: 'copy',
      type: 'richText',
      required: true,
    }
  ]
};

export default WYSIWYG;