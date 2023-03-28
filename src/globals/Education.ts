import { GlobalConfig } from "payload/types";

const Education: GlobalConfig = {
  slug: "education",
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
      name: 'institutions',
      fields: [
        {
          type: 'text',
          name: 'name'
        },
        {
          type: 'textarea',
          name: 'description'
        }
      ]
    }
  ],
};

export default Education;
