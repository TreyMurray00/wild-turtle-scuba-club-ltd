import {defineField, defineType} from 'sanity'

export const privacypolicyType = defineType({
  name: 'privacypolicy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
    }),
    
  ],
})