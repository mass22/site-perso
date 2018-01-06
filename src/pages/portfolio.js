import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import config from "../../data/SiteConfig";
import * as PropTypes from "prop-types"
/** Style **/
import styled from 'styled-components';
import * as palette from '../layouts/scss/variables'
import { Grid } from 'semantic-ui-react'


const WorkItem = styled.div`
border-radius: 4px;
box-shadow: 0 0 0 1px ${palette.SHADOW};
padding: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover, 
&:focus {
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
}
.gatsby-image-outer-wrapper {
  margin-top: 15px;
  margin-bottom: 15px;
}
`

const WorkTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
`

const WorkHeader = styled.div`
display: flex;
justify-content: space-between;
`

const WorkBottom = styled.div``

const Title = styled.h2`
  color: ${palette.THIRD};
  display: inline-flex;
  
`
const Date = styled.p`
  display: inline-flex;
  align-self: center;
  font-style: italic;
`
const Description = styled.p``
const Company = styled.span`
  display: inline;
`
const ExtLink = styled.a`
  display: block;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  margin-bottom: 5px;
  background-color: ${palette.BROWN};
  &:hover {
    border: 2px solid ${palette.BROWN}; 
    color: ${palette.BROWN};
    background-color: #FFF;
  }
`

const Category = styled.span`
  display: block;
`
const Tags = styled.small`
  display: inline;
`


const propTypes = {
    data: PropTypes.object.isRequired,
  }

class WorksPage extends React.Component {
    render () {
      const frWorks = this.props.data.fr.edges

        const WORKS = ({ node }) => (
          
            <WorkItem>
              <WorkTop>
                <WorkHeader>
                  <Title>{node.name}</Title>
                  <Date>{node.date}</Date>
                </ WorkHeader>
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
                <Description>{node.description.description}</Description>
                <p className={'typo__7'}>Employeur:<Company> {node.company}</Company></p>
              </WorkTop>
              <WorkBottom>
                <ExtLink href={node.link} target="_blank">Voir le site</ExtLink>
                <Category>{node.category.name}</Category>
                {[node.tags.map((tag, i) =>(
                     <Tags>{`${tag.name}  `}</Tags>
                  ))]}  
              </ WorkBottom>
            </WorkItem>
          
        )
          
        return(
            <div>
              <Helmet>
                <title>{`Portfolio | ${config.siteTitle}`}</title>
              </Helmet>
              <h1>Portfolio</h1>
              <Grid stackable stretched columns={2}>
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
      sort: {fields: [date] order: DESC}
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
