export default {
  name: "pricingPlan",
  type: "object",
  title: "Pricing Plan",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "price",
      type: "number",
      title: "Price"
    },
    {
      name: "currency",
      type: "string",
      title: "Currency"
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "string"
        }
      ]
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
      name: "isRecommended",
      type: "boolean",
      title: "Is Recommended"
    }
  ]
}