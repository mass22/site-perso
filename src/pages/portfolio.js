import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import * as PropTypes from "prop-types";
import MarkdownRenderer from "react-markdown-renderer";
/** Style **/
import styled from "styled-components";
import * as palette from "../layouts/scss/variables";
import {
  Grid,
  Button,
  Icon,
  Modal,
  Header,
  Container,
  Divider
} from "semantic-ui-react";

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
`;

const WorkTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WorkBottom = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h2`
  color: ${palette.THIRD};
  display: inline-flex;
`;
const Date = styled.p`
  display: inline-flex;
  align-self: center;
  font-style: italic;
`;
const Company = styled.span`
  display: inline;
  text-transform: uppercase;
`;

const Category = styled.span`
  display: table;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 4px 7px;
  background: ${palette.THIRD};
  color: #ffffff;
`;
const Tags = styled.small`
  @media (${palette.SM}) {
    // display: none;
  }
  display: inline;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 4px 7px;
  background: #ffffff;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CoverImg = styled(Img)`
  margin: 0;
  max-height: 200px;
  @media (${palette.SM}) {
    height: 200px;
  }
  img {
    object-fit: contain !important;
  }
`;

const ModalImg = styled(Img)`
  img {
    object-fit: contain !important;
  }
`;

const NoLink = styled.p`
  padding: 10px;
  border: 1px solid ${palette.SHADOW};
  margin-top: 10px;
  text-align: center;
`;

const propTypes = {
  data: PropTypes.object.isRequired
};

class WorksPage extends React.Component {
  isLink(link) {
    if (link) {
      return (
        <Button
          basic
          as={"a"}
          href={link}
          target="_blank"
          className="U--W--100"
        >
          <Icon name="world" /> Voir le site
        </Button>
      );
    } else {
      return <NoLink>Le site n'est plus en ligne</NoLink>;
    }
  }

  render() {
    const frWorks = this.props.data.fr.edges;

    let button = null;

    const WORKS = ({ node }) => (
      <WorkItem tabIndex="0">
        <WorkTop>
          <WorkHeader>
            <Title className={"typo__3"}>{node.name}</Title>
            <Date>{node.date}</Date>
          </WorkHeader>
          {[
            node.media.map((image, i) => (
              <CoverImg
                src={image.sizes.src}
                sizes={image.sizes}
                className={"worksImg"}
                alt={image.title}
                tabIndex="1"
              />
            ))
          ]}
          <div>
            <MarkdownRenderer markdown={node.description.description} />
          </div>
        </WorkTop>
        <div>
          <WorkBottom>
            <Divider section />
            <p className={"typo__7"}>
              Employeur:<Company> {node.company}</Company>
            </p>
            <Category>{node.category.name}</Category>
            <TagList>
              {[node.tags.map((tag, i) => <Tags>{`${tag.name}`}</Tags>)]}
            </TagList>
          </WorkBottom>
          {/* <Modal
            trigger={<Button className={"U--W--100"}>Voir plus</Button>}
            closeIcon
          >
            <Modal.Header>{node.name}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Employeur: {node.company}</Header>
                {[
                  node.media.map((image, i) => (
                    <ModalImg
                      src={image.sizes.src}
                      style={{
                        margin: 0,
                        height: 450
                      }}
                      sizes={image.sizes}
                      className={"worksImg"}
                    />
                  ))
                ]}
              </Modal.Description>
              {this.isLink(node.link)}
            </Modal.Content>
          </Modal> */}
        </div>
      </WorkItem>
    );

    return (
      <Container>
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
      </Container>
    );
  }
}

WorksPage.propTypes = propTypes;

export default WorksPage;

export const pageWorksQuery = graphql`
  query PageWorksQuery {
    fr: allContentfulWorks(
      filter: { node_locale: { eq: "fr-CA" } }
      sort: { fields: [date], order: DESC }
    ) {
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
          category {
            name
          }
          media {
            sizes {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
            title
          }
        }
      }
    }
  }
`;
