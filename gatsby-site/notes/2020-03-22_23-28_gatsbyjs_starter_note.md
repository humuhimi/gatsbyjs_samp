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