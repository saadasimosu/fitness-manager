import React, { Component } from 'react';
import Program from './Program/Program';
import { programTypes } from './../../constants';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const addCardColor = 'green';
const addCardIcon = 'add circle';
const programDetails = [
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

export default class Programs extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      programDetails: programDetails,
      match: props.match
    }
  }

  render() {
    return(
      <Card.Group centered>
        <Card 
          as={Link}
          to={`${this.state.match.url}/new`}
        >
          <Image className='add-program-container'>
            <Icon name={addCardIcon} size='huge' color={addCardColor} />
          </Image>
        </Card>
        {this.state.programDetails.map((program, index) => {
          return (
            <Program key={index} programName={program.name} programType={program.type} programDescription={program.description} match={this.state.match}/>
          )
        })}
      </Card.Group>
  );
  }
}
