import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components';
import * as palette from '../../layouts/scss/variables'

const Header = styled.header`
  font-size: 1.5em;
  background-color: ${palette.PRIMARY};
  color: ${palette.B_TYPO};
  border-bottom: ${palette.THIRD} 2px solid;
  `;

class C_Header extends React.Component {
    
    render () {

        return(
            <Header className={'ui full-width container'}>
                <div className={'header'}>
                    <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        paddingLeft: 15
                    }}
                    >
                    <span className={'typo__0'}>Massimo Russo</span>
                    </Link>
                </div>
            </Header>
        )
    }
}

export default C_Header