import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";
import { Button, Icon, Container } from 'semantic-ui-react'

import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
  }


class ArticleTemplate extends React.Component {
    render () {
      const article = this.props.data.contentfulArticles
      const {
        title,
        description,
        content : {content},
        createdAt,
        media,
        author : {name},
        author : {bio}
      } = article

      const metaTitle = {title}
        return ( 
            <Container>
              <Helmet>
                <title>{`${title} | ${config.siteTitle}`}</title>
              </Helmet>

              <h1>{title}</h1>
              {/* <Img
                src={media.sizes.src}
                style={{ 
                  margin: 0
                  }}
                sizes={media.sizes}
                alt={media.title}
              /> */}
              <b>{description}</b>
              <i>{createdAt}</i>
              <p>{content}</p>
              <hr/>
              <div>
              <p>{name}</p>
              <p>{bio}</p>
              <Button basic as={Link} to="/blogue/">
                <Icon name='long arrow left' /> Retour
              </Button>
              </div>
            </Container>
        )
      }
    }


ArticleTemplate.propTypes = propTypes

export default ArticleTemplate

export const TemplateArticleQuery = graphql`
query articleQuery($id: String!) {
  contentfulArticles(id: { eq: $id }) {
    title
    description
    slug
    content {
      content
    }
    createdAt(formatString: "DD MMM, YYYY") 
    media {
      title
      sizes(maxWidth: 100) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
    author {
      id
      name
      bio
    }
  }
}
`