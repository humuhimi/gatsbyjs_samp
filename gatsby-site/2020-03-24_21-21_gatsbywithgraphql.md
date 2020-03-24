```js
// graphql

query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
      	html
        excerpt
      }
    }
  }
}
↓
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "title": "React",
              "date": "2020-03-10"
            },
            "html": "<p>this post adout react</p>",
            "excerpt": "this post adout react"
          }
        }
```
