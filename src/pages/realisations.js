import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";
/** Style **/
import styled from 'styled-components';
import * as palette from '../layouts/scss/variables'
import { Grid } from 'semantic-ui-react'


import * as PropTypes from "prop-types"

const propTypes = {
    data: PropTypes.object.isRequired,
  }

const WorkItem = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${palette.SHADOW};
  padding: 30px;
  &:hover, 
  &:focus {
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
  }
`


class WorksPage extends React.Component {
    render () {
      const frWorks = this.props.data.fr.edges

        const WORKS = ({ node }) => (
            <WorkItem>
                <h2>{node.name}</h2>
                {[node.media.map((image, i) =>(
                    <Img
                    src={image.sizes.src}
                    style={{ 
                      margin: 0,
                      height: 200
                      }}
                      sizes={image.sizes}
                      className={'worksImg'}
                  />
                ))]}
                <p>{node.description.description}</p>
                <p>{node.date}</p>
                <p>{node.company}</p>
                <a href={node.link} target="_blank">Aller</a><br/>
                <span>{node.category.name}</span><br/>
                {[node.tags.map((tag, i) =>(
                    <small>{`${tag.name} - `}</small>
                ))]}  
            </WorkItem>
        )
          
        return(
            <div>
              <Helmet>
                <title>{`Réalisations | ${config.siteTitle}`}</title>
              </Helmet>
              <h1>Réalisations</h1>
              <Grid stackable columns={2}>
                    {frWorks.map(({ node }, i) => (
                      <Grid.Column key={node.id}>
                        <WORKS node={node} />
                      </Grid.Column>
                    ))}
              </Grid>
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
