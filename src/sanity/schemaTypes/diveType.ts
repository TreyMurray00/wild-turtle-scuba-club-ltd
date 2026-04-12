import { defineField, defineType } from "sanity";

export const diveType = defineType({
    name: "dive",
    title: "Dive",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string"
        }),
        defineField({
            name: "description",
            type: "text"
        }),
        defineField({
            name: "includes",
            type: "array",
            of: [{ type: "string" }]
        }),
        defineField({
            name: "cost",
            type: "number"
        }),

    ],
})
