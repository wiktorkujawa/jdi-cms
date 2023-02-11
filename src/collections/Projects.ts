import { CollectionConfig } from "payload/types";
import { Button } from "../fields/elements";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "Name",
  },
  fields: [
    {
      name: "name",
      type: "text",
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
