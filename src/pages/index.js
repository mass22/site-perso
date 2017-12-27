import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}


class IndexPage extends React.Component {
  render() {

     const frHomepage = this.props.data.fr.edges[0] 
     const enHomepage = this.props.data.en.edges[0]

    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/fr-ca/page-2/">Go to page 2</Link>
        <br/>
        <Link to="/fr-ca/blogue/">Go to blogue</Link>
        <br/>
        <Link to="/fr-ca/works/">Go to works</Link>
        <br/>
        <Link to="/en/">english</Link>
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
  fr: allContentfulHomepage(filter: { node_locale: { eq: "fr-CA" } }) {
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
  en: allContentfulHomepage(filter: { node_locale: { eq: "en-CA" } }) {
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