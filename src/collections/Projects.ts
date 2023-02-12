import { CollectionConfig } from "payload/types";
import { Button } from "../fields/elements";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "Name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      unique: true
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "media",
      type: "upload",
      relationTo: 'media'
    },
    Button
  ],
};

export default Projects;
