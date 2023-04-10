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
    {
      label: "Media URL",
      name: "mediaUrl",
      type: "text"
    },
    Button
  ],
};

export default Projects;
