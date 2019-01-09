import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Program from '../Program/Program';

export default class ProgramGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programDetails: props.programDetails
    };
  }

  render() {
    return (
      <Card.Group centered>
        {this.state.programDetails.map((program, index) => {
          return (
            <Program key={index} programName={program.name} programType={program.type} programDescription={program.description} />
          )
        })}
      </Card.Group>
    );
  }
}