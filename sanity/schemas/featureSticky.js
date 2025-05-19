export default {
  name: "featureSticky",
  type: "object",
  title: "Feature Sticky",
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
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "featureItem"
        }
      ]
    }
  ]
}