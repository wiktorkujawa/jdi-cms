import { GlobalConfig } from "payload/types";
import { Button } from "../fields/elements";

const ProjectList: GlobalConfig = {
  slug: "projectList",
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
    {
      type: "relationship",
      relationTo: "projects",
      name: "projectsList",
      hasMany: true,
    },
  ],
};

export default ProjectList;
