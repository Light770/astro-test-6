export default {
  name: "featureItem",
  type: "object",
  title: "Feature Item",
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
      name: "icon",
      type: "image",
      title: "Icon",
      options: {
        hotspot: true
      }
    }
  ]
}