import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Program from '../Program/Program';

const addCardColor = 'green';
const addCardIcon = 'add circle';

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
        <Card color={addCardColor}>
          <Image className='add-program-container'>
            <Icon name={addCardIcon} size='huge' color={addCardColor} />
          </Image>
        </Card>
        {this.state.programDetails.map((program, index) => {
          return (
            <Program key={index} programName={program.name} programType={program.type} programDescription={program.description} />
          )
        })}
      </Card.Group>
    );
  }
}