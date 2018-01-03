import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";


import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
  }


class BloguePage extends React.Component {
    render () {
      const frArticles = this.props.data.fr.edges

        const ARTICLE = ({ node }) => (
          
            <div>
                <h2>{node.title}</h2>
                <p>{node.description}</p>
                {/* <Img
                  src={node.media.responsiveSizes.src}
                  style={{ 
                    margin: 0,
                    }}
                  sizes={node.media.responsiveSizes}
                /> */}
                <p>{node.createdAt}</p>
                <Link to={`/blogue/${node.slug}/`}>lire l'article</Link>
            </div>
        )
          
        return(

            <div>
                <Helmet>
                  <title>{`Blogue | ${config.siteTitle}`}</title>
                </Helmet>

                <h1>Blogue</h1>

                {frArticles.map(({ node }, i) => (
                  <ARTICLE node={node} key={node.id} />
                ))}
            </div>
        )
    }
}


BloguePage.propTypes = propTypes

export default BloguePage

export const pageBlogueQuery = graphql`
query PageBlogueQuery {
  fr: allContentfulArticles(
      filter: { node_locale: { eq: "fr-CA" } } 
      sort: {fields: [createdAt] order: DESC}
      limit: 5 ){
    edges {
      node {
        id 
        title
        description
        slug
        createdAt(formatString: "DD MMM, YYYY") 
        media {
          responsiveSizes {
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
