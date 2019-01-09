import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Program } from '../Program/Program';

export class ProgramGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programDetails: props.programDetails
        };
    }

    render() {
        return(
            <Card.Group centered>
                { this.state.programDetails.map((program, index) => {
                    return (
                        <Program programName={program.name} programType={program.type} programDescription={program.description} />)
                })}
            </Card.Group>
        );
    }
}