import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
  }


class BlogueEnPage extends React.Component {
    render () {
      const enArticles = this.props.data.en.edges

        const ARTICLE = ({ node }) => (
          
            <div>
                <h2>{node.title}</h2>
                <p>{node.description}</p>
                <Img
                  src={node.media.sizes.src}
                  style={{ 
                    margin: 0,
                    }}
                  sizes={node.media.sizes}
                />
                <p>{node.createdAt}</p>
                <Link to={`/blog/${node.slug}/`}>lire l'article</Link>
            </div>
        )
          
        return(
            <div>
                <h1>Hi from the Blogue</h1>
                <p>Welcome to Blogue</p>
                <Link to="/">Go back to the Homepage</Link>
                <hr/>

                {enArticles.map(({ node }, i) => (
                  <ARTICLE node={node} key={node.id} />
                ))}
            </div>
        )
    }
}


BlogueEnPage.propTypes = propTypes

export default BlogueEnPage

export const pageBlogueEnQuery = graphql`
query PageBlogueEnQuery {
  en: allContentfulArticles(
      filter: { node_locale: { eq: "en-CA" } } 
      sort: {fields: [createdAt] order: DESC}
      limit: 5 ){
    edges {
      node {
        id 
        title
        description
        slug
        createdAt(formatString: "MMM DD, YYYY") 
        media {
          sizes(maxWidth: 100) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          } 
        }
      }
    }
  }
}
`
