import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig"
import Slider from 'react-slick'
/** Style **/
import styled from 'styled-components';
import * as palette from '../layouts/scss/variables'
import { Item } from 'semantic-ui-react'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Recommandation = styled.article`
    border-top: 2px solid #e2e2e2;
    border-bottom: 2px solid #e2e2e2;
    padding: 40px;
`

class IndexPage extends React.Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      accessibility: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000
    };
    
    const frHomepage = this.props.data.fr.edges[0]
    const HOMEPAGE = ({ node }) => (
      <div>
        <h1>
        {frHomepage.node.name}
        </h1>
        <p>
        {frHomepage.node.content.content}
        </p>

        <Slider {...settings}>
        {[frHomepage.node.recommandations.map((recommandation, i) =>(
          <Recommandation>
        <Item.Group unstackable>
          <Item>
          <Item.Image size="tiny" style={{ maxWidth: 40 }} src={require('../static/logos/LinkedIn_logo.png')} />
          <Item.Content >
            <Item.Header>"{recommandation.content.content}"</Item.Header>
            <Item.Description>{recommandation.author}</Item.Description>
            <a href={`${recommandation.link}`}>Voir le profil de l'auteur</a>
            
          </Item.Content>
          
          </Item>
        </Item.Group>
        </Recommandation>
        
        ))]}
        </ Slider>

      </div>
       
      )
      
      

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
        

        <HOMEPAGE />

      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
query PageQuery {
  fr: allContentfulHomepage(
    filter: { node_locale: { eq: "fr-CA" } }
  ) {
    edges {
      node {
        id 
        name
        content {
          content
        }
        recommandations {
          id
          author
          content {
            content
          }
          link
        }
      }
    }
  }
}
`