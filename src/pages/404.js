import React from "react";
import { Container } from "semantic-ui-react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => (
  <Container>
    <Helmet>
      <title>{`404 | ${config.siteTitle}`}</title>
    </Helmet>
    <h1>ZUT! Ça en marche plus...</h1>
    <p>Quel dommage ! Essayez plutôt une des page ci-dessous</p>
  </Container>
);

export default NotFoundPage;
