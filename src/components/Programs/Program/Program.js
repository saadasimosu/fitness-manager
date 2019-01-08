import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
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
            type: props.programType
        }
    }

    render() {
        const type = this.state.type;

        return (
            <Card color={programTypeToColorMap[type]}>
                <Image src={programTypeToLogoMap[type]} size='small' centered/>
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            
            </Card>)
    }
}