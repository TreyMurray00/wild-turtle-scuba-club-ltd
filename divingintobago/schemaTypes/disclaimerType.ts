import { defineField, defineType } from "sanity";



export const disclaimerType = defineType({
  name: 'disclaimer',
  title: 'Disclaimer',
  type: 'document',
  fields: [
    defineField({
      name: 'disclaimertext',
      type: 'string',
    }),
    defineField({
        name: "image",
        type: "image"
    })
  ],
})