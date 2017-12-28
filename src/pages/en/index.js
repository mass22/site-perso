import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}


class IndexEnPage extends React.Component {
  render() {

     const enHomepage = this.props.data.en.edges[0]

    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/en/page-2/">Go to page 2</Link>
        <br/>
        <Link to="/en/blogue/">Go to blogue</Link>
        <br/>
        <Link to="/en/works/">Go to works</Link>
        <br/>
        <Link to="/">Français</Link>
        <h1>
        {enHomepage.node.name}
        </h1>
        <p>
        {enHomepage.node.content.content}
        </p>
      </div>
    )
  }
}

IndexEnPage.propTypes = propTypes

export default IndexEnPage

export const pageEnQuery = graphql`
query PageEnQuery {
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