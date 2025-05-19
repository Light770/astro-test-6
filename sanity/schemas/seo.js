export default {
  name: "seo",
  type: "object",
  title: "SEO",
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
      name: "keywords",
      type: "array",
      title: "Keywords",
      of: [
        {
          type: "string"
        }
      ]
    }
  ]
}