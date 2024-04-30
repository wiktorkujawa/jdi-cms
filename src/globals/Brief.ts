import { GlobalConfig } from "payload/types";

const Brief: GlobalConfig = {
  slug: "brief",
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
          tag: 'brief'
        })
      })
    
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
