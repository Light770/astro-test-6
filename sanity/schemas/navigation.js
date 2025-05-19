export default {
  name: "navigation",
  type: "document",
  title: "Navigation",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "items",
      type: "array",
      title: "Navigation Items",
      of: [
        {
          type: "navigationItem"
        }
      ]
    }
  ]
}