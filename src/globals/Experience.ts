import { GlobalConfig } from "payload/types";

const Experience: GlobalConfig = {
  slug: "experience",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "text",
      name: 'header'
    },
    {
      type: 'array',
      name: 'positions',
      fields: [
        {
          type: 'text',
          name: 'position'
        },
        {
          type: 'text',
          name: 'description'
        }
      ]
    }
  ],
};

export default Experience;
