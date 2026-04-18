import { defineField, defineType } from "sanity";

export const contactType = defineType({
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [

        defineField({
            name: "email",
            type: "string"
        }),
        defineField({
            name: "address",
            type: "array",
            of: [{ type: "string" }]
        }),

        defineField({
            name: "phone",
            type: "string"
        }),
        defineField({
            name: "whatsapp",
            type: "string"
        }),
    ],
})  