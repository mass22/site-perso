import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
/** Style **/
import styled from "styled-components";
import { Button, Container } from "semantic-ui-react";

import * as PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.object.isRequired
};

const ArticleItem = styled.article`
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 40px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Header = styled.header`
  padding-bottom: 10px;
  h2 {
    margin-bottom: 0;
  }
`;

class BloguePage extends React.Component {
  render() {
    const frArticles = this.props.data.fr.edges;
    const MetaTitle = () => (
      <Helmet>
        <title>{`Blogue | ${config.siteTitle}`}</title>
      </Helmet>
    );

    const ARTICLE = ({ node }) => (
      <ArticleItem
        role="article"
        itemscope="itemscope"
        itemtype="http://schema.org/Article"
      >
        <Header>
          <h2>{node.title}</h2>
          <p className={"typo__7"}>
            Posté le <time>{node.createdAt}</time>
          </p>
        </Header>
        <figure>
          <Img
            src={node.media.sizes.src}
            style={{
              margin: 0,
              maxHeight: 250
            }}
            sizes={node.media.sizes}
          />
        </figure>
        <p>{node.description}</p>
        <Button as={Link} to={`/blogue/${node.slug}/`}>
          Lire l'article
        </Button>
      </ArticleItem>
    );

    return (
      <Container>
        <MetaTitle />
        <h1>Blogue</h1>
        <section>
          {frArticles.map(({ node }, i) => (
            <ARTICLE node={node} key={node.id} />
          ))}
        </section>
      </Container>
    );
  }
}

BloguePage.propTypes = propTypes;

export default BloguePage;

export const pageBlogueQuery = graphql`
  query PageBlogueQuery {
    fr: allContentfulArticles(
      filter: { node_locale: { eq: "fr-CA" } }
      sort: { fields: [createdAt], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          title
          description
          slug
          createdAt(formatString: "DD MMM, YYYY")
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
`;
