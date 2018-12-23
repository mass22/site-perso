import React from "react";
import { Progress, Container, Grid } from "semantic-ui-react";

class skillsPage extends React.Component {
  render() {
    const Contenu = () => (
      <div>
        <h1>Compétences</h1>
      </div>
    );
    const Test = () => (
      <Progress percent={60} color="red" size="small" active />
    );

    return (
      <Container>
        <Contenu />
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Test />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default skillsPage;
