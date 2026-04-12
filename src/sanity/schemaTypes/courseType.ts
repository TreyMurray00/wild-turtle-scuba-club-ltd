import {defineField, defineType} from 'sanity'

export const courseType = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: "cost",
        type: "number"
    }),
    defineField({
        name: "image",
        type: "image",
        options:{
          hotspot: true
        }
    }),
    defineField({
        name: "description",
        type: "text"
    })
  ],
})