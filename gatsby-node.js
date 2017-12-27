
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulArticles {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        
        // Create Article pages
        const articleTemplate = path.resolve(`./src/templates/article.js`)
        
        _.each(result.data.allContentfulArticles.edges, edge => {
          createPage({
            path: `/blogue/${edge.node.slug}/`,
            component: slash(articleTemplate),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
            },
          })
        })
        
        resolve()       
      })
  })
}