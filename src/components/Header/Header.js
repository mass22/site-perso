import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import * as palette from "../../layouts/scss/variables";
import { Responsive, Container } from "semantic-ui-react";
import "./style/header.scss";

const Header = styled.section`
  font-size: 1.5em;
  background-color: ${palette.DARK_GRAY};
  color: ${palette.S_TYPO};
  border-bottom: ${palette.TURQUOISE} 4px solid;
  position: relative;
  a {
    display: inline-flex;
    align-items: center;
  }
`;

const ImgLogo = styled.img`
  max-width: 80px;
  margin-right: 20px;
  padding: 1.45rem 0;
`;

class C_Header extends React.Component {
  render() {
    return (
      <Header className={"ui fluid container"}>
        <Container>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none"
            }}
            tabIndex="0"
          >
            <Responsive minWidth={640}>
              <ImgLogo src={require("./img/logo.png")} />
            </Responsive>
            <span className={"typo__0"}>Massimo Russo</span>
          </Link>
        </Container>
        <Container className={"headerLinks"}>
          <Link to="/" activeClassName={"active"} exact tabIndex="0">
            Accueil
          </Link>
          <Link to="/portfolio/" activeClassName={"active"} exact tabIndex="0">
            Portfolio
          </Link>
          <Link to="/blogue/" activeClassName={"active"} exact tabIndex="0">
            Blogue
          </Link>
          <Link to="/contact/" activeClassName={"active"} exact tabIndex="0">
            Contact
          </Link>
        </Container>
      </Header>
    );
  }
}

export default C_Header;
