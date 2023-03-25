import { GlobalConfig } from "payload/types";

const Navigation: GlobalConfig = {
  slug: "navigation",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Pages", // required
          description: "Already defined pages",
          fields: [
            {
              name: "page",
              type: "relationship",
              hasMany: true,
              unique: true,
              relationTo: "pages",
            },
          ],
        },
        {
          label: "Custom menu", // required
          description: "Custom navigation",
          fields: [
            {
              type: "array",
              name: "pages",
              fields: [
                {
                  name: "slug",
                  type: "text",
                  unique: true,
                },
                {
                  name: "name",
                  type: "text",
                  unique: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "relationship",
      hasMany: true,
      relationTo: "socials",
      name: "socials",
    },
  ],
};

export default Navigation;
