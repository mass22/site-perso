import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
  }


class WorksPage extends React.Component {
    render () {
      const frWorks = this.props.data.fr.edges

        const WORKS = ({ node }) => (
            <div>
                <h2>{node.name}</h2>
                <p>{node.description.description}</p>
                <p>{node.date}</p>
                <p>{node.company}</p>
                <a href={node.link} target="_blank">Aller</a><br/>
                <span>{node.category.name}</span><br/>
                {[node.tags.map((tag, i) =>(
                    <small>{`${tag.name} - `}</small>
                ))]}

                {[node.media.map((image, i) =>(
                    <Img
                    src={image.sizes.src}
                    style={{ 
                      margin: 0,
                      }}
                    sizes={image.sizes}
                  />
                ))]}
            </div>
        )
          
        return(
            <div>
                <h1>Hi from the Works</h1>
                <p>Welcome to Works</p>
                <Link to="/">Go back to the Homepage</Link>
                <hr/>

                {frWorks.map(({ node }, i) => (
                  <WORKS node={node} key={node.id} />
                ))}
            </div>
        )
    }
}


WorksPage.propTypes = propTypes

export default WorksPage

export const pageWorksQuery = graphql`
query PageWorksQuery {
  fr: allContentfulWorks(
      filter: { node_locale: { eq: "fr-CA" } } 
      sort: {fields: [createdAt] order: DESC}
      limit: 5 ){
    edges {
      node {
        id 
        name
        link
        date(formatString: "YYYY") 
        description {
            description
        }
        company 
        tags {
            name
        }
        category{
            name
        }
        media {
          sizes(maxWidth: 100) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          } 
        }
      }
    }
  }
}
`
