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
    }),
    defineField({
        name: "accommodationType",
        title: "Accommodation Type",
        type: "string",
        description: "For example: Guest House, Apartment or Hotel",
    }),
    defineField({
        name: "priceRange",
        title: "Price Range",
        type: "string",
        description: "A general range such as Budget, Mid-range or Premium",
    }),
    defineField({
        name: "distance",
        title: "Distance from Dive Centre",
        type: "string",
    }),
    defineField({
        name: "bestFor",
        title: "Best For",
        type: "string",
        description: "For example: Solo travellers, couples or groups",
    })
  ],
})
