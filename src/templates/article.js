import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import {
  Button,
  Icon,
  Container,
  Item,
  Image,
  Header,
  Divider,
  Segment
} from "semantic-ui-react";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown-renderer";

import * as PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.object.isRequired
};

const AuthorBloc = styled(Header)`
  padding: 20px !important;
  border: 1px solid #ccc !important;
  border-radius: 4px;
`;

const ArticleImg = styled(Img)`
  max-width: 500px;
  max-height: 400px;
`;

const ShareContainer = styled.div`
  margin: 20px 0;
`;

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticles;
    const {
      title,
      description,
      content: { content },
      createdAt,
      media,
      slug,
      author: { name },
      author: { bio },
      author: { image }
    } = article;

    const metaTitle = { title };
    const baseUrl = "https://www.russo-massimo.com/blogue/";
    return (
      <Container as="article" role="article">
        <Helmet>
          <title>{`${title} | ${config.siteTitle}`}</title>
        </Helmet>
        <header>
          <h1>{title}</h1>
          <p className={"U--bold"}>{description}</p>
        </header>
        <figure style={{ textAlign: "center" }}>
          <ArticleImg
            src={media.sizes.src}
            style={{
              margin: "auto"
            }}
            sizes={media.sizes}
            alt={media.title}
          />
          <figcaption>{media.title}</figcaption>
        </figure>
        <MarkdownRenderer markdown={content} />
        <ShareContainer>
          <Button
            color="linkedin"
            as={"a"}
            href={`http://www.linkedin.com/shareArticle?url=${baseUrl}${slug}&title=${title}&summary=${description}&source=${baseUrl}${slug}`}
            target={"_blank"}
          >
            <Icon size="large" name="linkedin" />
          </Button>

          <Button
            color="twitter"
            as={"a"}
            href={`http://twitter.com/share?url=${baseUrl}${slug}&text=${description}via=russo_massimo`}
            target="_blank"
          >
            <Icon size="large" name="twitter" />
          </Button>

          <Button
            color="facebook"
            as={"a"}
            href={`http://www.facebook.com/sharer/sharer.php?u=${baseUrl}${slug}`}
            target="_blank"
          >
            <Icon size="large" name="facebook f" />
          </Button>

          <Button
            color="google plus"
            as={"a"}
            href={`https://plus.google.com/share?url=${baseUrl}${slug}`}
            target="_blank"
          >
            <Icon size="large" name="google plus" />
          </Button>

          <Button
            color="grey"
            as={"a"}
            href={`mailto:?subject=${title}&body=${baseUrl}${slug}`}
            target="_blank"
          >
            <Icon size="large" name="mail" />
          </Button>
        </ShareContainer>
        <Divider />
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              src={image.sizes.src}
              alt="Massimo Russo Logo"
            />
            <Item.Content>
              <Item.Header as="cite">{name}</Item.Header>
              <Item.Meta as="time" style={{ display: "block" }}>
                Posté le {createdAt}
              </Item.Meta>
              <Item.Description>{bio}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>

        <Button basic as={Link} to="/blogue/">
          <Icon name="long arrow left" /> Retour
        </Button>
      </Container>
    );
  }
}

ArticleTemplate.propTypes = propTypes;

export default ArticleTemplate;

export const TemplateArticleQuery = graphql`
  query articleQuery($id: String!) {
    contentfulArticles(id: { eq: $id }) {
      title
      description
      slug
      content {
        content
      }
      createdAt(formatString: "DD MMM, YYYY")
      media {
        title
        sizes {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
      author {
        id
        name
        bio
        image {
          title
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
`;
