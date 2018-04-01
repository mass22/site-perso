import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import * as PropTypes from 'prop-types'
/** Style **/
import styled from 'styled-components'
import * as palette from '../../layouts/scss/variables'
import config from '../../../data/SiteConfig'
import { Responsive, Button, Icon } from 'semantic-ui-react'

const Footer = styled.footer`
  background-color: ${palette.DARK_GRAY};
  color: #ffffff;
  text-align: center;
  width: 100%;
  margin-top: auto;
  padding: 15px 15px 40px 15px !important;
  img {
    max-width: 50px;
    margin: auto;
  }
`

const Liens = styled.a`
  text-decoration: underline;
`

const propTypes = {
  data: PropTypes.object,
}

class C_Footer extends React.Component {
  render() {
    return (
      <Footer className={'ui fluid container'}>
        <div className={'ui container'}>
          <p className={'typo__8'}>
            {config.copyright}
            <Responsive as={'span'} minWidth={640}>
              {' '}
              | Site développé avec{' '}
              <Liens
                href="https://www.contentful.com/"
                rel="nofollow"
                target="_blank"
              >
                Contentful
              </Liens>,{' '}
              <Liens
                href="https://www.netlify.com/"
                rel="nofollow"
                target="_blank"
              >
                Netlify
              </Liens>,{' '}
              <Liens
                href="https://www.gatsbyjs.org/"
                rel="nofollow"
                target="_blank"
              >
                Gatsby JS
              </Liens>,{' '}
              <Liens href="https://reactjs.org/" rel="nofollow" target="_blank">
                React JS
              </Liens>,{' '}
              <Liens
                href="https://react.semantic-ui.com/"
                rel="nofollow"
                target="_blank"
              >
                Semantic-UI React
              </Liens>{' '}
              et{' '}
              <Liens href="https://github.com/" rel="nofollow" target="_blank">
                Github
              </Liens>
            </Responsive>
          </p>
          <div>
            <Button 
              compact 
              color="grey" 
              as={'a'} 
              href={'https://github.com/mass22/'}
              target={'_blank'}
              >
              <Icon name="github" /> Github
            </Button>
            <Button
              compact
              color="linkedin"
              as={'a'}
              href={'https://www.linkedin.com/in/russomassimo'}
              target={'_blank'}
            >
              <Icon name="linkedin" /> Linkedin
            </Button>
          </div>
          {/* <img src={require('../../static/logos/logo.png')} /> */}
        </div>
      </Footer>
    )
  }
}

C_Footer.propTypes = propTypes

export default C_Footer
