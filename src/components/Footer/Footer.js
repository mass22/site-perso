import React, { Component } from 'react';
import Link from 'gatsby-link'
import Img from "gatsby-image"
import * as PropTypes from "prop-types"
/** Style **/
import styled from 'styled-components';
import * as palette from '../../layouts/scss/variables'



const Footer = styled.footer`
background-color: #bbb;
text-align: center;
width: 100%;
margin-top: auto;
padding: 15px 15px 40px 15px;
`;

const Liens = styled.a`
    text-decoration: underline
`

const propTypes = {
    data: PropTypes.object,
  }
  
class C_Footer extends React.Component {
    render () {
        
        return(
            <Footer>
              <p className={'typo__8'}>&copy;2018 - Massimo Russo | Site développé avec <Liens href="https://www.contentful.com/" rel="nofollow" target="_blank">Contentful</Liens>, <Liens href="https://www.netlify.com/" rel="nofollow" target="_blank">Netlify</Liens>, <Liens href="https://www.gatsbyjs.org/" rel="nofollow" target="_blank">Gatsby JS</Liens>, <Liens href="https://reactjs.org/" rel="nofollow" target="_blank">React JS</Liens> et <Liens href="https://github.com/" rel="nofollow" target="_blank">Github</Liens>
                </p>       
                        
            </Footer>
        )
    }
}

C_Footer.propTypes = propTypes

export default C_Footer