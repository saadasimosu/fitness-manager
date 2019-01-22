import React, { Component } from 'react';
import { exerciseTypes } from '../../constants';
import { Grid, Container } from 'semantic-ui-react';
import { programTypes } from '../../constants';
import ExerciseList from './ExerciseList/ExerciseList';

const exercises = [
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

export default class Exercises extends Component {
  getExerciseByType(exercises, exerciseType) {
    return exercises.filter(exercise => {
      return exercise.type === exerciseType;
    });
  }

  render() {
    const numColumns = Object.keys(exerciseTypes).length;

    return (
      <Container>
        <Grid centered doubling stackable columns={numColumns}>
          <Grid.Row>
            {Object.values(programTypes).map((programType, index) => {
              return(<ExerciseList 
                        key={index} 
                        listType={programType} 
                        exerciseItems={this.getExerciseByType(exercises, programType)} 
                        match={this.props.match} 
                      />
                    );
            })}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}