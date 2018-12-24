import React from "react";
import * as PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

/** Style **/
import styled from "styled-components";
import * as palette from "../layouts/scss/variables";
import { Progress, Container, Grid } from "semantic-ui-react";

const propTypes = {
  data: PropTypes.object.isRequired
};

const SkillsContainer = styled.div``;

const SkillBox = styled.div`
  border-bottom: 1px solid ${palette.SHADOW};
  &:last-child {
    border-bottom: none;
  }
`;

class CompetencesPage extends React.Component {
  render() {
    const frSkills = this.props.data.fr.edges;

    const Skill = ({ node }) => (
      <SkillBox>
        <h3>{node.title}</h3>
        <Progress percent={node.level} color="grey" size="small" active />
        <p>{node.description.description}</p>
      </SkillBox>
    );

    return (
      <Container>
        <Helmet>
          <title>{`Compétences | ${config.siteTitle}`}</title>
        </Helmet>
        <h1>Compétences</h1>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <h2>Technique</h2>
              <SkillsContainer>
                {frSkills.map(({ node }, i) => (
                  <Skill node={node} key={node.id} />
                ))}
              </SkillsContainer>
            </Grid.Column>
            <Grid.Column width={6}>
              <h2>Autre</h2>
              <h3>Divers</h3>
              <ul>
                <li>TypeScript</li>
                <li>Responsive Design</li>
                <li>WCAG 2.0</li>
                <li>PHP</li>
                <li>Notions de C#</li>
              </ul>
              <h3>Langues</h3>
              <ul>
                <li>Français</li>
                <li>Anglais</li>
                <li>Italien</li>
              </ul>
              <h2>Reconnaissances</h2>
              <ul>
                <li>Grand Prix Boomerang pour le Fonds de solidatité FTQ</li>
              </ul>
              <h2>Formations</h2>
              <h3>2019</h3>
              <ul>
                <li>Sitecore 9 (Certification)</li>
                <li>Coveo for Sitecore (Certification)</li>
                <li>
                  NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)
                </li>
              </ul>
              <h3>2018</h3>
              <ul>
                <li>Introduction to TypeScript</li>
                <li>ReactJS + Redux pour débutants</li>
                <li>Modern ReactJS with Redux</li>
                <li>
                  Vue JS 2 - The Complete Guide (incl. Vue Router and Vuex)
                </li>
              </ul>
              <h3>2016</h3>
              <ul>
                <li>Angular 2</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

CompetencesPage.propTypes = propTypes;

export default CompetencesPage;

export const pageCompetencesQuery = graphql`
  query PageSkillsQuery {
    fr: allContentfulSkills(
      filter: { node_locale: { eq: "fr-CA" } }
      sort: { fields: [createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          title
          level
          description {
            description
          }
          createdAt
        }
      }
    }
  }
`;
