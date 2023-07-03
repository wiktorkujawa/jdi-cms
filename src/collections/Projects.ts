import { CollectionConfig } from "payload/types";
import { Button } from "../fields/elements";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "name",
  },
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
          slug: "/"
        })
      })
      const data = await res.json();
      console.log(data);
    
    }]
  },
  fields: [
    {
      name: "name",
      type: "text",
      unique: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
    },
    {
      label: "Media URL",
      name: "mediaUrl",
      type: "text",
    },
    Button,
  ],
};

export default Projects;
