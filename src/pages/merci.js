import React from "react";
import Link from 'gatsby-link'
import { Container } from 'semantic-ui-react'


export default () =>
  <Container>
    <h1>Merci !</h1>
    <p>Votre message a bien été envoyé. Je vous répondrai dans les meilleurs délais</p>
    <Link to="/">Retour à la page d'accueil</Link>
  </Container>