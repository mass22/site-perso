import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';


import * as palette from '../layouts/scss/variables'

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: ${palette.TITLE_COLOR};
`;

const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;


const SecondPage = () => (
  <Wrapper>
    <Title>Tests de Styled Components</Title>
    <Link to="/">Go back to the homepage</Link>
  </Wrapper>
)



export default SecondPage
