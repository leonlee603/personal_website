import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const topicType = defineType({
  name: "topic",
  title: "Topic",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to create a new topic on the website`),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page of topic on the website`),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
