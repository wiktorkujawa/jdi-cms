import { GlobalConfig } from "payload/types";

const Experience: GlobalConfig = {
  slug: "experience",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [async () => { 
      const res = await fetch(`${process.env.APP_URL}api/revalidate?secret=${process.env.MY_SECRET_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: 'experience'
        })
      })
      const data = await res.json();
      console.log(data);
    
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
