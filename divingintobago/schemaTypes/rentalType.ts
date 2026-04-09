import {defineField, defineType} from 'sanity'

export const rentalType = defineType({
  name: 'rental',
  title: 'Rental',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: "duration",
        type: "string",
    }),
    defineField({
      name: "category",
      type: "string"
    }),
    defineField({
        name: "price",
        type: "number",
    })
  ],
})