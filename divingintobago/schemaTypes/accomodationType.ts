import {defineField, defineType} from 'sanity'

export const accomodationType = defineType({
  name: 'accomodation',
  title: 'Accomodation',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: "link",
        type: "string",
    }),

    defineField({
        name: "image",
        type: "image",
    }),
    defineField({
        name: "description",
        type: "text",
    })
  ],
})