header.jsやfooter.jsをそれぞれlayout.jsにimportする

それぞれのpageにlayout.js,seo.js,image.jsを持ってくる


reactのインポートとコンポーネントの作成

~Page = () => (
    return()
)
で作っていく
ルーティングなしでなぜ表示されるのか?→pagesに入れているから

-
Link from gatsby 
<Link to="">
-
pageとの違いに注意
component = {
    return(

    )
}

-

    <Layout>
        <h1>Its sample page</h1>
    </Layout>
const Layout = (props) => {
    props.children
}
(props).{children}
↓
const Layout = ({ children }) => 
chirdren→ <h1>Its sample page</h1>

-
header.jsにはheader.scssを入れる

Link にはclassNameを

-
- [cssのflexboxについて](https://coliss.com/articles/build-websites/operation/css/css3-flexbox-properties-by-scotch.html)

justify contentもflexboxと同じく何かしら並びをどうこうするもの

-
nav itemを右寄せにしたい時
margin-right: auto

- graphiqlを使う場合はこれを使う
useStaticQuery, graphql

```javascript
// 内部の情報にアクセス
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
```

---
yarn add env-cmdで環境変数を変更する
end-cmdがうまく行かない? 急ぎならcross-cmd試す


# 次はここから

(gatsbyJs)[https://www.youtube.com/watch?v=8t0vNu2fCCM]
10. Sourcing Content from the File System
  - Timestamp: 1:51:32