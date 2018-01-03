import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";
/** Style **/
import styled from 'styled-components';
import * as palette from '../layouts/scss/variables'

import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
  }

const ArticleItem = styled.div`
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 40px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`


class BloguePage extends React.Component {
    render () {
      const frArticles = this.props.data.fr.edges

        const ARTICLE = ({ node }) => (
          
            <ArticleItem>
                <h2>{node.title}</h2>
                <p>{node.description}</p>
                <p>{node.createdAt}</p>
                <Link to={`/blogue/${node.slug}/`}>lire l'article</Link>
            </ArticleItem>
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
