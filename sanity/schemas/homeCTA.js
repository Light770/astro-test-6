export default {
  name: "homeCTA",
  type: "object",
  title: "Home CTA",
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
      name: "buttonLabel",
      type: "string",
      title: "Button Label"
    },
    {
      name: "buttonLink",
      type: "string",
      title: "Button Link"
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true
      }
    }
  ]
}