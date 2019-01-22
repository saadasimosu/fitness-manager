import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { programTypeToColorMap, programTypeToLogoMap } from '../../../constants';
import { Link } from 'react-router-dom';

export default class Program extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.programName,
      type: props.programType,
      description: props.programDescription,
      match: props.match
    }
  }

  render() {
    const { name, type, description } = this.state;

    return (
      <Card 
        as={Link}
        to={`${this.state.match.url}/${this.state.name}`}
        color={programTypeToColorMap[type]}>
        <Image src={programTypeToLogoMap[type]} size='small' centered alt={type + '.svg'} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>)
  }
}