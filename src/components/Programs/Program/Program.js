import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import cyclingLogo from '../../../images/cycling.svg';
import liftingLogo from '../../../images/lifting.svg';
import runningLogo from '../../../images/running.svg';
import swimmingLogo from '../../../images/swimming.svg';
import { programTypes } from '../../../constants';

const programTypeToLogoMap = {
  [programTypes.CYCLING]: cyclingLogo,
  [programTypes.LIFTING]: liftingLogo,
  [programTypes.RUNNING]: runningLogo,
  [programTypes.SWIMMING]: swimmingLogo
};

const programTypeToColorMap = {
  [programTypes.CYCLING]: 'purple',
  [programTypes.LIFTING]: 'red',
  [programTypes.RUNNING]: 'green',
  [programTypes.SWIMMING]: 'blue'
};

export class Program extends Component {
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