import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig"
import Slider from 'react-slick'
/** Style **/
import styled from 'styled-components';
import * as palette from '../layouts/scss/variables'
import { Item, Container, Segment, Image } from 'semantic-ui-react'

import Background from '../static/backgrounds/bg-home-2.jpeg'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Recommandation = styled.article`
    border-top: 2px solid ${palette.BROWN};
    border-bottom: 2px solid ${palette.BROWN};
    padding: 40px;
`

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh; // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }
`

const AbsoluteContainer = styled(Container)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
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
      autoplaySpeed: 7000,
      speed: 3000
    };
    
    const frHomepage = this.props.data.fr.edges[0]
    const bg = this.props.data.bg.edges[0].node.sizes


    const HOMEPAGE = ({ node }) => (
      <div>
        <Segment
            inverted
            textAlign='center'
            style={{ 
              position: 'relative',
            }}
            vertical
          >
          <BgImage src={bg.src} sizes={bg} />
          <AbsoluteContainer text>
            <h1>
            {frHomepage.node.name}
            </h1>
            <Image size='medium' centered circular src={require('../static/logos/logo.png')} />
            
          </AbsoluteContainer>
        </Segment>


        <Container>
          <p>
            {frHomepage.node.content.content}
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro odio magni! Id repellat molestiae expedita unde, quod voluptates blanditiis laudantium dicta totam architecto eveniet ratione facere minus eum rem?</p>
        </Container>

       <Container fluid style={{backgroundColor: "#ccc"}} >
        <Container>
          <h2>Ils ont dit...</h2>
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
        </Container>
      </Container>      

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
  },
  bg: allContentfulAsset (
  	filter: { id: { eq: "c5PxvSEWkBqoswQKa0ioIAq" } }
  ) {
    edges {
      node {
        id 
        sizes(maxWidth: 4000) {
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