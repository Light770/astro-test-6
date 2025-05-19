export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO"
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block"
        },
        {
          type: "textImage"
        },
        {
          type: "featureCards"
        },
        {
          type: "featureList"
        },
        {
          type: "featureSticky"
        },
        {
          type: "basicForm"
        },
        {
          type: "contactCards"
        },
        {
          type: "homeCTA"
        },
        {
          type: "highlightRows"
        },
        {
          type: "signUp"
        },
        {
          type: "pricingColumns"
        },
        {
          type: "faqSticky"
        },
        {
          type: "basicFeed"
        }
      ]
    }
  ]
}