import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [

    defineField({
      name: "herotitle",
      type: "string"
    }),
    defineField({
      name: "herotitle2",
      type: "string"
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    })
  ],
})