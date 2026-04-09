import {defineField, defineType} from 'sanity'

export const socialType = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'email',
    }),
    defineField({
      name: 'instagram',
      type: 'string',
    }),
    defineField({
      name: 'tiktok',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: "facebook",
      type:"string"
    })
  ],
})