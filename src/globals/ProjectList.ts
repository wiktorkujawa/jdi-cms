import { GlobalConfig } from "payload/types";
import { Button } from "../fields/elements";

const ProjectList: GlobalConfig = {
  slug: "projectList",
  access: {
    read: () => true,
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
