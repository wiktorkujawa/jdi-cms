import { Block } from "payload/types";
import { Button } from "../elements";

const Slider: Block = {
  slug: 'Slider',
  fields: [
    {
      name: 'slides',
      type: 'array',
      fields: [
        {
          name: 'media',
          required: true,
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'copy',
          type: 'richText',
        },
        {
          name: 'attribution',
          type: 'text',
        },
        Button
      ]
    },
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          name: 'dots',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'arrows',
          type: 'checkbox',
          defaultValue: false
        },
        {
          name: 'draggable',
          type: 'checkbox',
          defaultValue: false
        },
        {
          name: 'autoplay',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'autoplaySpeed',
          type: 'number',
          admin: {
            condition: (data, siblingData) => siblingData.autoplay,
          },
          defaultValue: 3000,
          min: 1000,
        },
        {
          name: 'slidesPerRow',
          type: 'number',
          defaultValue: 1,
          min: 1
        }
      ],
    },
  ]
};

export default Slider;

