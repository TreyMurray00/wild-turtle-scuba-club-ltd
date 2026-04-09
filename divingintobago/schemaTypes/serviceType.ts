import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: "description",
        type: "text"
    }),
    defineField({
        name: "image",
        type: "image"
    }),
    defineField({
        name: "price",
        type:"number"
    })
  ],
})