import React from "react"
import { graphql,useStaticQuery,Link } from 'gatsby'
import blogStyles from './blog.module.scss'


import Layout from "../components/layout"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
            query {
                allMarkdownRemark {
                edges {
                    node {
                    frontmatter {
                        title
                        date
                    }
                    excerpt
                    fields {
                        slug
                    }
                    }
                }
                }
            }  
    `)
    return(
        <Layout>
        <h1>Blog</h1>
        <p>後でここに投稿する</p>
        <ol className={blogStyles.posts}>
            {data.allMarkdownRemark.edges.map((edge) => {
                return(
                <div>
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </li>
                    <p>{edge.node.excerpt}</p>
                </div>
                )})}
        </ol>
    </Layout>
    )
}

export default BlogPage
