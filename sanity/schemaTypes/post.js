export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "photos",
      type: "array",
      title: "Photos",
      of: [
        {
          type: "image",

          fields: [
            {
              name: "description",
              type: "text",
              title: "Description",
            },
            {
              name: "link",
              type: "url",
              title: "Link",
            },
          ],
        },
      ],
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "photos.0.asset",
      date: "_createdAt",
    },
    prepare(selection) {
      const { title, media, date } = selection;
      return {
        media,
        title: new Date(date).toLocaleDateString(),
        subtitle: title,
      };
    },
  },
};
