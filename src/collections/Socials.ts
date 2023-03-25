import { CollectionConfig } from "payload/types";

const Socials: CollectionConfig = {
  slug: "socials",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "select",
      unique: true,
      options: [
        {
          label: "Linkedin",
          value: "linkedin",
        },
        {
          label: "Github",
          value: "github",
        },
        {
          label: "StackOverflow",
          value: "stackoverflow",
        },
      ],
    },
    {
      name: "url",
      type: "text",
      unique: true,
    },
  ],
};

export default Socials;
