import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";
import { Button, Icon, Container, Item, Image, Header, Divider, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
  }

const AuthorBloc = styled(Header)`
  padding: 20px !important;
  border: 1px solid #ccc !important;
  border-radius: 4px;
`

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
        author : {bio},
        author : {image}
      } = article

      const metaTitle = {title}
        return ( 
            <Container as="article" role="article">
              <Helmet>
                <title>{`${title} | ${config.siteTitle}`}</title>
              </Helmet>
              <header>
                <h1>{title}</h1>
                <p className={'U--bold'}><b>{description}</b></p>
              </header>
                <figure style={{textAlign: "center"}}>
                  <Img
                  src={media.sizes.src}
                  style={{ 
                    margin: 0
                    }}
                  sizes={media.sizes}
                  alt={media.title}
                  />
                  <figcaption>{media.title}</figcaption>
                </figure>
              <p>{content}</p>
              <Divider />
            
                <Item.Group>
                  <Item>
                    <Item.Image size='tiny' src={image.sizes.src} alt="image de test" />
                    <Item.Content>
                      <Item.Header as='cite'>{name}</Item.Header>
                      <Item.Meta as='time' style={{display: "block"}}>Posté le {createdAt}</Item.Meta>
                      <Item.Description>
                        {bio}
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
            
              <Button basic as={Link} to="/blogue/">
                <Icon name='long arrow left' /> Retour
              </Button>
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
      image {
        title
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
`