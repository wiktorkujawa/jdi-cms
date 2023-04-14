import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  // admin: {
  //   useAsTitle
  // }
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    disableLocalStorage: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: null,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
  },
  hooks: {
    afterRead: [
      ({
        doc: {
          url,
          sizes,
          width,
          height,
          filename,
          filesize,
          cloudinary: { public_id, resource_type },
        },
      }) => {
        const bucket_url = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/${resource_type}/upload/`;
        // add a url property on the main image
        url = `${bucket_url}${public_id}.webm`;
        // add a url property on each imageSize

        if (resource_type == "image") {
          url = `${bucket_url}${public_id}.webp`;
          Object.keys(sizes).forEach((k) => {
            sizes[k].url = `${bucket_url}w_${sizes[k].width || width},h_${
              sizes[k].height || height
            },c_limit/${public_id}.webp`;
            sizes[k].width = sizes[k].width || width;
            sizes[k].height = sizes[k].height || height;
            sizes[k].filename = sizes[k].filename || filename;
            sizes[k].filesize = sizes[k].filesize || filesize;
          });
        }
      },
    ],
  },
  fields: [],
};

export default Media;
