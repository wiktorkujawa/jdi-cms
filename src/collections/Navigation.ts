import { CollectionConfig } from "payload/types";
import { Button } from "../fields/elements";

const Navigation: CollectionConfig = {
  slug: "navigation",
  admin: {
    useAsTitle: "Name",
  },
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
};

export default Navigation;
