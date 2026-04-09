import {defineField, defineType} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: "text",
      type: "text"
    }),
    defineField({
      name: "image",
      type: "image",
    })
  ],
})