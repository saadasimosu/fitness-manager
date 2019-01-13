import React, { Component } from 'react';
import { excerciseTypes } from '../../constants';
import { Grid } from 'semantic-ui-react';
import { programTypes } from '../../constants';
import ExcerciseList from './ExcerciseList/ExcerciseList';

export default class Excercises extends Component {
  excercises = [
    {
      name: 'Bench Press',
      type: programTypes.LIFTING,
      category: 'Compound'
    },
    {
      name: 'Deadlift',
      type: programTypes.LIFTING,
      category: 'Compound'
    },
    {
      name: 'Bicep Curl',
      type: programTypes.LIFTING,
      category: 'Biceps'
    },
    {
      name: 'Ks',
      type: programTypes.RUNNING,
      category: 'Interval Training'
    },
    {
      name: '10 Mile Run',
      type: programTypes.RUNNING,
      category: 'Long Distance'
    },
    {
      name: 'Uphill',
      type: programTypes.CYCLING,
      category: 'Strength'
    },
    {
      name: '100m',
      type: programTypes.SWIMMING,
      category: 'General'
    }
  ];

  getExcerciseByType(excercises, excerciseType) {
    return excercises.filter(excercise => {
      return excercise.type === excerciseType;
    });
  }

  render() {
    const numColumns = Object.keys(excerciseTypes).length;

    return (
      <Grid centered doubling stackable columns={numColumns}>
        <Grid.Row>
          {Object.values(programTypes).map((programType, index) => {
            return(<ExcerciseList key={index} listType={programType} excerciseItems={this.getExcerciseByType(this.excercises, programType)} />)
          })}
        </Grid.Row>
      </Grid>
    );
  }
}