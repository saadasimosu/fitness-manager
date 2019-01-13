import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { programTypeToColorMap, programTypeToLogoMap } from '../../../constants';

export default class Program extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.programName,
      type: props.programType,
      description: props.programDescription
    }
  }

  render() {
    const { name, type, description } = this.state;

    return (
      <Card color={programTypeToColorMap[type]}>
        <Image src={programTypeToLogoMap[type]} size='small' centered />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>)
  }
}