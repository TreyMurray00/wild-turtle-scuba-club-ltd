import { defineType, defineField } from 'sanity';

export const galleryType = defineType({
    name: 'galleryPhoto',
    title: 'Gallery Photo',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'A short title or caption for the photo',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
            description: 'Descriptive text for screen readers and SEO',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Diving', value: 'diving' },
                    { title: 'Fishing', value: 'fishing' },
                    { title: 'Marine Life', value: 'marine-life' },
                    { title: 'Courses', value: 'courses' },
                    { title: 'Accommodation', value: 'accommodation' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            description: 'Optional longer description shown in lightbox',
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured',
            type: 'boolean',
            description: 'Featured photos are displayed larger in the gallery',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first (optional)',
        }),
    ],
    orderings: [
        {
            title: 'Manual Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
        {
            title: 'Newest First',
            name: 'createdAtDesc',
            by: [{ field: '_createdAt', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
            media: 'image',
            featured: 'isFeatured',
        },
        prepare({ title, category, media, featured }) {
            return {
                title: `${featured ? '⭐ ' : ''}${title}`,
                subtitle: category ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') : 'Uncategorized',
                media,
            };
        },
    },
});
