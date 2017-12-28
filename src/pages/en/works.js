import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
  }


class WorksEnPage extends React.Component {
    render () {
      const enWorks = this.props.data.en.edges

        const WORKS = ({ node }) => (
            <div>
                <h2>{node.name}</h2>
                <p>{node.description.description}</p>
                <p>{node.date}</p>
                <p>{node.company}</p>
                <a href={node.link} target="_blank">Visit Website</a><br/>
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
                <h1>English</h1>
                <p>Welcome to Works</p>
                <Link to="/">Go back to the Homepage</Link>
                <hr/>

                {enWorks.map(({ node }, i) => (
                  <WORKS node={node} key={node.id} />
                ))}
            </div>
        )
    }
}


WorksEnPage.propTypes = propTypes

export default WorksEnPage

export const pageWorksEnQuery = graphql`
query PageWorksEnQuery {
  en: allContentfulWorks(
      filter: { node_locale: { eq: "en-CA" } } 
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
