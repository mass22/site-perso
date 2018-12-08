import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

/** Style **/
import styled from "styled-components";
import * as palette from "../layouts/scss/variables";
import "semantic-ui-css/semantic.css";
import {
  Sidebar,
  Segment,
  Menu,
  Icon,
  Responsive,
  Button
} from "semantic-ui-react";
import "./main.scss";
/** Components **/
import C_Footer from "../components/Footer/Footer";
import C_Header from "../components/Header/Header";

import ReactGA from "react-ga";

ReactGA.initialize("UA-130672302-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const propTypes = {
  data: PropTypes.object.isRequired
};

/** Styled Components **/
const Main_Container = styled.div`
 // background-color: ${palette.BG_MAIN};
`;

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
`;

export default class TemplateWrapper extends React.Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  toggleBurger() {
    const burgerMenu = document.querySelector("#burger").classList;
    burgerMenu.toggle("is-active");
  }

  closeBurger() {
    const burgerMenu = document.querySelector("#burger").classList;
    burgerMenu.remove("is-active");
  }

  closeVisibility = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    const { children } = this.props;
    const { defaultVisible } = { visible: false };

    return (
      <div>
        <Helmet
          meta={[
            { charSet: "utf-8" },
            {
              name: "description",
              content: "Massimo Russo, développeur Front-End à Montréal"
            },
            {
              name: "keywords",
              content:
                "Front-end, developer, développeur, frontend, front end, montreal, canada"
            }
          ]}
          htmlAttributes={{
            lang: "fr-CA"
          }}
        />
        <HeaderContainer className={"header"}>
          <C_Header />
          <Button
            name="Toggle Menu"
            type="button"
            id="burger"
            className="C--menu-burger cmb__anim"
            onClick={event => {
              this.toggleVisibility();
              this.toggleBurger();
            }}
            aria-label="Toggle Menu"
          >
            <span className="cmb__box">
              <span className="cmb__inner" />
            </span>
          </Button>
        </HeaderContainer>
        <Sidebar.Pushable as={Segment} basic>
          <Sidebar
            as={Menu}
            animation="push"
            direction="top"
            visible={visible}
            inverted
          >
            <div className="ui container">
              <Link to="/" activeClassName={"active"} exact>
                <Menu.Item name="home" className={"typo__6"}>
                  <Icon name="home" />
                  <Responsive minWidth={640}>Accueil</Responsive>
                </Menu.Item>
              </Link>
              <Link to="/portfolio/" activeClassName={"active"} exact>
                <Menu.Item name="desktop" className={"typo__6"}>
                  <Icon name="desktop" />
                  <Responsive minWidth={640}>Portfolio</Responsive>
                </Menu.Item>
              </Link>
              <Link to="/blogue/" activeClassName={"active"} exact>
                <Menu.Item name="newspaper" className={"typo__6"}>
                  <Icon name="newspaper" />
                  <Responsive minWidth={640}>Blogue</Responsive>
                </Menu.Item>
              </Link>
              <Link to="/contact/" activeClassName={"active"} exact>
                <Menu.Item name="mail" className={"typo__6"}>
                  <Icon name="mail" />
                  <Responsive minWidth={640}>Contact</Responsive>
                </Menu.Item>
              </Link>
            </div>
          </Sidebar>
          <Sidebar.Pusher
            onClick={event => {
              this.closeVisibility();
              this.closeBurger();
            }}
          >
            <Segment basic>
              <Main_Container className={"ui container fluid"}>
                {children()}
              </Main_Container>
              <C_Footer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
    TemplateWrapper.propTypes = {
      children: PropTypes.func
    };
  }
}
