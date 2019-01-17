import React, { Component } from 'react';
import ProgramGroup from './ProgramGroup/ProgramGroup';
import { programTypes } from './../../constants';

export default class Programs extends Component {
  programDetails = [
    {
      name: 'NSuns',
      type: programTypes.LIFTING,
      description: 'The 6 day NSuns Lifting Program'
    },
    {
      name: 'Couch to 5k',
      type: programTypes.RUNNING,
      description: 'Get prepared for your first 5k'
    },
    {
      name: 'Learn to Swim',
      type: programTypes.SWIMMING,
      description: 'Learn how to swim'
    },
    {
      name: 'Tour de France',
      type: programTypes.CYCLING,
      description: 'Literally Lance Armstrong'
    }
  ];

  render() {
    return(
      <ProgramGroup programDetails={this.programDetails} />
    );
  }
}
