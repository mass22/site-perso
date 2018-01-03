import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";

const propTypes = {
  data: PropTypes.object.isRequired,
}


class IndexPage extends React.Component {
  render() {

     const frHomepage = this.props.data.fr.edges[0] 

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>
        <h1>
        {frHomepage.node.name}
        </h1>
        <p>
        {frHomepage.node.content.content}
        </p>
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
      }
    }
  }
}
`