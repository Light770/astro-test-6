export default {
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "sections",
      type: "array",
      title: "Footer Sections",
      of: [
        {
          type: "footerSection"
        }
      ]
    },
    {
      name: "copyright",
      type: "string",
      title: "Copyright Text"
    }
  ]
}