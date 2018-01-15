import React, { Component } from 'react'
import Link from 'gatsby-link'
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
    const HOMEPAGE = ({ node }) => (
      <div>
        <Segment
            inverted
            textAlign='center'
            style={{ 
              minHeight: 700, 
              padding: '1em 0em',
              background: `url(${Background}) fixed`,
              backgroundSize: "cover",
              backgroundRepeat: 'no-repeat',
            }}
            vertical
          >
          <Container text>
            <h1>
            {frHomepage.node.name}
            </h1>
            <Image size='medium' centered circular src={require('../static/logos/LinkedIn_logo.png')} />
            
          </Container>
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
  }
}
`