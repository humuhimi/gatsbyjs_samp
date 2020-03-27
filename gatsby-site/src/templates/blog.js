import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from "../components/seo"

export const query = graphql`
    query ($slug:String!) {
   contentfulBlogPost(slug : { eq :$slug }) {
      title
      publishedDate(formatString: "MMMM Do,YYYY")
      body {
        json 
      }
  }
}`

const Blog = (props) => {
  const options = {
    renderNode : {
      "embedded-asset-block":(node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} width="500px" />
      }
    }
  }
    return(
        <Layout>
        <SEO title="blog" />
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json,options)}
        {/* <div dangerouslySetInnerHTML={{ __html : props.data.markdownRemark.html }}></div> */}
        </Layout>
    )
}
  export default Blog