import { GlobalConfig } from "payload/types";

const Experience: GlobalConfig = {
  slug: "experience",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [async () => { 
      await fetch(`${process.env.APP_URL}api/revalidate-tag?secret=${process.env.MY_SECRET_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tag: 'experience'
        })
      })
    }]
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
          type: 'textarea',
          name: 'description'
        }
      ]
    }
  ],
};

export default Experience;
