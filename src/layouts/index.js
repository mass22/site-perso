import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
/** Style **/
import styled from 'styled-components';
import * as palette from '../layouts/scss/variables'
import 'semantic-ui-css/semantic.css'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import './main.scss'
/** Components **/
import C_Footer from '../components/Footer/Footer'
import C_Header from '../components/Header/Header'


const propTypes = {
  data: PropTypes.object.isRequired,
}

/** Styled Components **/
const Main_Container = styled.div`
  background-color: ${palette.BG_MAIN};
  padding-top: 40px;
  padding-bottom: 40px;
`;



export default class TemplateWrapper extends React.Component {
  state = { visible: false }
  
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
  toggleBurger () {
    const burgerMenu = document.querySelector('#burger').classList
    burgerMenu.toggle('is-active')    
  }

  closeBurger () {
    const burgerMenu = document.querySelector('#burger').classList
    burgerMenu.remove('is-active')    
  }

  closeVisibility = () => this.setState({ visible: false })
  
  
  render() {
    const { visible } = this.state
    const { children } = this.props
    const { defaultVisible } = { visible: false }

    
        return (
        
          <div>
              <Helmet
                  meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                  ]}
              />
              <C_Header />
              <Button type="button" id="burger" className="C--menu-burger cmb__anim" onClick={(event) => {this.toggleVisibility(); this.toggleBurger()}}>
                <span className="cmb__box">
                  <span className="cmb__inner"></span>
                </span>
              </Button>
              <Sidebar.Pushable as={Segment}>
              <Sidebar as={Menu} animation='push' direction='top' visible={visible} inverted>
                <div className="ui container">
                  <Link to="/" activeClassName={'active'} exact>
                    <Menu.Item name='home' className={'typo__5'}>
                      <Icon name='home' />
                      Accueil
                    </Menu.Item>
                  </Link>
                  <Link to="/realisations/" activeClassName={'active'} exact>
                    <Menu.Item name='desktop' className={'typo__5'}>
                      <Icon name='desktop' />
                      Réalisations
                    </Menu.Item>
                  </Link>
                  <Link to="/blogue/" activeClassName={'active'} exact>
                    <Menu.Item name='newspaper' className={'typo__5'}>
                      <Icon name='newspaper' />
                      Blogue
                    </Menu.Item>
                  </Link>
                  <Link to="/contact/" activeClassName={'active'} exact>
                    <Menu.Item name='mail' className={'typo__5'}>
                      <Icon name='mail' />
                      Contact
                    </Menu.Item>
                  </Link>
                </div>
              </Sidebar>
              <Sidebar.Pusher onClick={(event) => {this.closeVisibility(); this.closeBurger()}}>
                  <Segment basic>
                    <Main_Container className={'ui container'}>
                        {children()}
                    </Main_Container>
                    <C_Footer />
                  </Segment>
              </Sidebar.Pusher>
              </Sidebar.Pushable>
          </div>
        )
        TemplateWrapper.propTypes = {
            children: PropTypes.func,
          }
      }
    }


