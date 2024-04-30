import { GlobalConfig } from "payload/types";
import { Button } from "../fields/elements";

const ProjectList: GlobalConfig = {
  slug: "projectList",
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
          tag: 'projectsList'
        })
      })
    
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
