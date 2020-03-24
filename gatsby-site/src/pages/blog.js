import React from "react"
import { graphql,useStaticQuery } from 'gatsby'


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
                    }
                }
                }
            }  
    `)
    return(
        <Layout>
        <h1>Blog</h1>
        <p>後でここに投稿する</p>
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return(
                <li>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.title}</p>
                    <p>{edge.node.excerpt}</p>
                </li>
                )})}
        </ol>
    </Layout>
    )
}

export default BlogPage
