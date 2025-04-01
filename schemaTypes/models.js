import { defineField } from "sanity";

const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    defineField({
        name: "description",
        title: "Description",
        type: "text",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "image",
        title: "Image",
        type: "image",
        validation: (rule) => rule.required(),
    }),
    
  ],
};

const project = {
    name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    defineField({
        name: "description",
        title: "Description",
        type: "text",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "image",
        title: "Image",
        type: "image",
        validation: (rule) => rule.required(),
    }),
    
  ],
}

const job = {
    name: "job",
  title: "Job",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    defineField({
        name: "description",
        title: "Description",
        type: "text",
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: "email",
        title: "Email",
        type: "email",
        validation: (rule) => rule.required(),
    }),
    
  ],
}

export {job,blog,project};