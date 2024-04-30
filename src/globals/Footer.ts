import { GlobalConfig } from "payload/types";

const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "group",
      name: 'address',
      fields: [
        {
          type: 'text',
          name: 'street',
          required: true
        },
        {
          type: 'text',
          name: 'city',
          required: true
        },
        {
          type: 'text',
          name: 'country',
          required: true
        },
      ]
    },
    {
      type: 'array',
      name: 'phone',
      fields: [
        {
          type: 'number',
          name: 'number'
        }
      ]
    },
    {
      type: 'array',
      name: 'emails',
      fields: [
        {
          type: 'email',
          name: 'email'
        }
      ]
    },
    {
      type: 'relationship',
      hasMany: true,
      relationTo: 'socials',
      name: 'socials'
    }
  ],
  hooks: {
    afterChange: [async () => { 
      await fetch(`${process.env.APP_URL}api/revalidate-tag?secret=${process.env.MY_SECRET_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tag: 'footer'
        })
      })
    
    }]
  },
};

export default Footer;
