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
新規にnodeを追加したりnodeを使った処理ができる
etc) .mdファイルから新規nodeFieldを作成→nodeFieldを新規ページとして出力など

(例えば)[https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext]

```js
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if( node.internal.type === "MarkdownRemark") {
        console.log(JSON.stringify(node,undefined,4))
    }
  }
↓
{
    "id": "ca9c965f-ef3e-5cbc-89db-93001f9dc5ed",
    "children": [],
    "parent": "8981a472-b812-55f2-9c0f-825cf1afe9dd",
    "internal": {
        "content": "\nabout Gatsby JS\n\n1. gatsby\n2. Graphql\n3. react\n",
        "type": "MarkdownRemark",
        "contentDigest": "38f27c6dee8838f4e4b4f4a44797cced",
        "counter": 53,
        "owner": "gatsby-transformer-remark"
    },
    "frontmatter": {
        "title": "Gatsby js",
        "date": "2020-03-13"
    },
    "excerpt": "",
    "rawMarkdownBody": "\nabout Gatsby JS\n\n1. gatsby\n2. Graphql\n3. react\n",
    "fileAbsolutePath": "/Users/humu/my_projects/gatsbyjs_samp/gatsby-site/src/posts/gatsby.md"
}
```