import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";


import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object,
  }


class ContactPage extends React.Component {
    render () {
      
          
        return(

            <div>
                <Helmet>
                  <title>{`Contact | ${config.siteTitle}`}</title>
                </Helmet>

                <h1>Contact</h1>

            </div>
        )
    }
}


ContactPage.propTypes = propTypes

export default ContactPage