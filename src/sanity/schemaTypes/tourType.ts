import { defineField, defineType } from "sanity";

export const tourType = defineType({
    name: "tour",
    title: "Tour",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string"
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
        defineField({
            name: "rate",
            type: "string"
        }),

    ],
})