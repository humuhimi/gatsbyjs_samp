/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// node js からpath module
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if( node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath,'.md')
        console.log("@@@@@@@"+slug)
        createNodeField({
            node,
            name : 'slug',
            value: slug
        })
    }
  }

module.exports.createPages = async({graphql,actions}) => {
    const {createPages } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}