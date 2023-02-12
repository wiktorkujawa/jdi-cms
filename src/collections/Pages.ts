import payload from "payload";
import { CollectionConfig } from "payload/types";
import { WYSIWYG, Quote } from "../fields/components";

const Pages: CollectionConfig = {
  slug: "pages",

  admin: {
    useAsTitle: "Name",
  },
  endpoints: [
    {
      path: '/slug/:slug',
      method: 'get',
      handler: async (req, res, next) => {
        const tracking = await payload.find({
          collection:'pages',
          where: {
            slug: {
              equals: req.params.slug
            }
          }
        });
        if (tracking) {
          res.status(200).send({ data: tracking.docs });
        } else {
          res.status(404).send({ error: 'not found' });
        }
      }
    }
  ],
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
    },
    {
      name: "customComponents",
      type: "blocks",
      // minRows: 0,
      maxRows: 20,
      blocks: [
        // required
        WYSIWYG,
        Quote
      ],
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Pages;
