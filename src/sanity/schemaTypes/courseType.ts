import { defineField, defineType } from 'sanity'

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
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order in which courses appear on the pricing page.',
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "description",
      type: "text"
    }),
    defineField({
      name: "cost",
      type: "string"
    }),
    defineField({
      name: "duration",
      type: "string"
    }),
    defineField({
      name: "includes",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "difficulty",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
      }
    })
  ],
})
