export default {
  name: "blogPost",
  type: "document",
  title: "Blog Post",
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
      name: "publishedAt",
      type: "datetime",
      title: "Published at"
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author"
        }
      ]
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "category"
            }
          ]
        }
      ]
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [
        {
          type: "string"
        }
      ]
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
      options: {
        hotspot: true
      }
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt"
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block"
        }
      ]
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO"
    }
  ]
}