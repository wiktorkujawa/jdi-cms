import { GlobalConfig } from "payload/types";

const Brief: GlobalConfig = {
  slug: "brief",
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
          slug: '/'
        })
      })
      const data = await res.json();
      console.log(data);
    
    }]
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "heading",
        },
        {
          type: "select",
          name: "level",
          options: [
            {
              value: "h1",
              label: "h1",
            },
            {
              value: "h2",
              label: "h2",
            },
            {
              value: "h3",
              label: "h3",
            },
            {
              value: "h4",
              label: "h4",
            },
            {
              value: "h5",
              label: "h5",
            },
          ],
        },
      ],
    },
    {
      name: "copy",
      type: "richText",
    },
  ],
};

export default Brief;
