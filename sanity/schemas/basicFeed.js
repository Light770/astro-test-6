export default {
  name: "basicFeed",
  type: "object",
  title: "Basic Feed",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          type: "feedItem"
        }
      ]
    }
  ]
}