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

- graphql

```js

//  String! is a non-nullable string.
query (
  $slug:String!
) {
  markdownRemark (
    fields : {
      slug : {
        eq :$slug
      }
    }
  ) {
    frontmatter {
      title
    }
  }
}
// +query variable
{
  "slug": "react"
}
// output
{
  "data": {
    "markdownRemark": {
      "frontmatter": {
        "title": "React"
      }
    }
  }
}
```

- gatsby pluginのresolve流れ

```js
// plugin~は全体
// resolveでつなげてoptionで下の層を決めていく
// gatsby-remark-images系はtransformer-remarkにconfigされる
`gatsby-plugin-sharp`,
{
  resolve:`gatsby-transformer-remark`,
  options: {
    plugins: {
      `gatsby-remark-relative-images`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth:750,
          linkImagesToOriginal: false
        }
      }
    }
  }
}
// 
gatsby-plugin-manifestはplugins: [からつながっている


// ドキュメントちゃんと見る

 {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        // gatsby-remark-relative-images must
        // go before gatsby-remark-images
        {
          resolve: `gatsby-remark-relative-images`,
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
      ],
    },
  },
```

```js
npm install gatsby-remark-relative-images,gatsby-remark-images
↓
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-transformer-remark`,
      options: {
        plugins: [
          {
         resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth:750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
↓
エラー
---
↓
react,react-dom,gatsbyをuninstall or upgarade
// 複数のプロジェクトのreactとかgatsbyが競合している場合に生じる?
→npm ls reactで依存関係は解決できた
```
sudo lsof -P -i:8000
sudo kill -9 4677 
 これでポートを確認して切ることができる

-  node_modules/gatsby-source-contentful/src/fragments.jsは画像用のcontentfulが自動で入れられているだけ

消したらエラー消える

- [graphql内の日付設定について](https://momentjs.com/docs/#/displaying/)


