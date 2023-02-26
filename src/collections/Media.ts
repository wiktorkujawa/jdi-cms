import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    disableLocalStorage: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: null,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  hooks: {
    afterRead: [
      ({ doc: { url,sizes, cloudinary: { format, public_id, resource_type} } }) => {
        const bucket_url = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/${resource_type}/upload/`;
        // add a url property on the main image
        url = `${bucket_url}${public_id}.${format}`
        // add a url property on each imageSize

        if(resource_type!=='video') {
          Object.keys(sizes)
          .forEach(k => {
            sizes[k].url = `${bucket_url}w_${sizes[k].width},h_${sizes[k].height},c_limit/${public_id}.${format}`
          })
        }
      }
    ]
  },
  fields: []
};

export default Media