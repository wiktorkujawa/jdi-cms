import { GlobalConfig } from "payload/types";

const Education: GlobalConfig = {
  slug: "education",
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
          tag: 'education'
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
