import React, { Component } from 'react';
import { excerciseTypes } from '../../constants';
import { Grid } from 'semantic-ui-react';

export default class Excercises extends Component {
  render() {
    const numColumns = Object.keys(excerciseTypes).length;

    return (
      <Grid centered columns={numColumns}>
        <Grid.Row>
          {Object.keys(excerciseTypes).forEach((key) => {
            return (
              <Grid.Column>
                {excerciseTypes[key]}
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }
}