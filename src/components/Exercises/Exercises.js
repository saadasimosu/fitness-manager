import React, { Component } from 'react';
import { exerciseTypes } from '../../constants';
import { Grid } from 'semantic-ui-react';
import { programTypes } from '../../constants';
import ExerciseList from './ExerciseList/ExerciseList';

export default class Exercises extends Component {
  exercises = [
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

  getExerciseByType(exercises, exerciseType) {
    return exercises.filter(exercise => {
      return exercise.type === exerciseType;
    });
  }

  render() {
    const numColumns = Object.keys(exerciseTypes).length;

    return (
      <Grid centered doubling stackable columns={numColumns}>
        <Grid.Row>
          {Object.values(programTypes).map((programType, index) => {
            return(<ExerciseList key={index} listType={programType} exerciseItems={this.getExerciseByType(this.exercises, programType)} />)
          })}
        </Grid.Row>
      </Grid>
    );
  }
}