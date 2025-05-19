export default {
  name: "footerSection",
  type: "object",
  title: "Footer Section",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "links",
      type: "array",
      title: "Links",
      of: [
        {
          type: "navigationItem"
        }
      ]
    }
  ]
}