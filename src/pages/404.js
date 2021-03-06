import React from "react";
import { Container } from "semantic-ui-react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

const NotFoundPage = () => (
  <Container>
    <Helmet>
      <title>{`404 | ${config.siteTitle}`}</title>
    </Helmet>
    <h1>404</h1>
    <h2>ZUT! Ça en marche plus...</h2>
    <p>Quel dommage ! Essayez plutôt une des page ci-dessous</p>
  </Container>
);

export default NotFoundPage;
