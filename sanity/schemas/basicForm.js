export default {
  name: "basicForm",
  type: "object",
  title: "Basic Form",
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
      name: "successMessage",
      type: "text",
      title: "Success Message"
    },
    {
      name: "fields",
      type: "array",
      title: "Form Fields",
      of: [
        {
          type: "formField"
        }
      ]
    }
  ]
}