import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'Meet the Instructor',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Meet Your Instructor',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Your trusted guide for unforgettable ocean adventures',
    }),
    defineField({
      name: 'instructorName',
      title: 'Instructor Name',
      type: 'string',
    }),
    defineField({
      name: 'instructorRole',
      title: 'Instructor Role / Title',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'Detailed background and story of the instructor. Supports line breaks.'
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications & Qualifications',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'stats',
      title: 'Experience Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value (e.g. 20+)' },
            { name: 'label', type: 'string', title: 'Label (e.g. Years Experience)' }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value'
            }
          }
        }
      ]
    })
  ],
})