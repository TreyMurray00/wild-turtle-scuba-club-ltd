import { defineType, defineField } from 'sanity';

export const divesiteType = defineType({
    name: 'divesite',
    title: 'Dive Site',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'maxDepth',
            title: 'Max Depth',
            type: 'number',
        }),
        defineField({
            name: "difficulty",
            title: "Difficulty",
            type: "string",
            options: {
                list: [
                    { title: "Easy", value: "easy" },
                    { title: "Intermediate", value: "intermediate" },
                    { title: "Advanced", value: "advanced" },
                ],
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'images',
            title: 'Images',
            of: [{ type: 'image', options: { hotspot: true } }],
            type: 'array'
        }),
    ],
});