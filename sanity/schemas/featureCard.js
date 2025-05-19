export default {
  name: "featureCard",
  type: "object",
  title: "Feature Card",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true
      }
    },
    {
      name: "link",
      type: "string",
      title: "Link"
    },
    {
      name: "linkLabel",
      type: "string",
      title: "Link Label"
    }
  ]
}