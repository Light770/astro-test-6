export default {
  name: "highlightRow",
  type: "object",
  title: "Highlight Row",
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
      name: "buttonLabel",
      type: "string",
      title: "Button Label"
    },
    {
      name: "buttonLink",
      type: "string",
      title: "Button Link"
    }
  ]
}