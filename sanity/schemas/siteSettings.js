export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site Title"
    },
    {
      name: "description",
      type: "text",
      title: "Site Description"
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
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      options: {
        hotspot: true
      }
    },
    {
      name: "favicon",
      type: "image",
      title: "Favicon",
      options: {
        hotspot: true
      }
    },
    {
      name: "navigation",
      type: "reference",
      title: "Navigation",
      to: [
        {
          type: "navigation"
        }
      ]
    },
    {
      name: "footer",
      type: "reference",
      title: "Footer",
      to: [
        {
          type: "footer"
        }
      ]
    },
    {
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      of: [
        {
          type: "socialLink"
        }
      ]
    },
    {
      name: "googleAnalyticsId",
      type: "string",
      title: "Google Analytics ID"
    },
    {
      name: "googleSearchConsoleId",
      type: "string",
      title: "Google Search Console ID"
    },
    {
      name: "googleTagManagerId",
      type: "string",
      title: "Google Tag Manager ID"
    }
  ]
}