import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components';
import * as palette from '../../layouts/scss/variables'
import { Responsive, Button, Icon, Container } from 'semantic-ui-react'


const Header = styled.section`
  font-size: 1.5em;
  background-color: ${palette.PRIMARY};
  color: ${palette.S_TYPO};
  border-bottom: ${palette.FLASH_BLUE} 4px solid;
  position: relative;
  a {
    display: flex;
    align-items: center;
  }
  `;
  
const ImgLogo = styled.img`
    max-width: 80px;
    margin-right: 20px;
    padding: 1.45rem 0;
`

class C_Header extends React.Component {
    
    render () {

        return(
            <Header className={'ui fluid container'}>
                <Container>
                    <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}
                    >
                    <Responsive minWidth={640}>
                        <ImgLogo src={require('./img/logo.png')} />
                    </Responsive>
                    <span className={'typo__0'}>Massimo Russo</span>
                    </Link>
                </Container>
            </Header>
        )
    }
}

export default C_Header