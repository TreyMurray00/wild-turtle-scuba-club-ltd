import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      type: 'string',
    }),
    defineField({
        name: "images",
        type: "array",
        of: [{
          type: "image",
          
          options: {
            hotspot: true
          }

        }],

    })
  ],
})