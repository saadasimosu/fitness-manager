import React, { Component } from 'react';
import { ProgramGroup } from './ProgramGroup/ProgramGroup';
import { programTypes } from './../../constants';

export class Programs extends Component {
    programDetails = [
        {
            name: 'NSuns',
            type: programTypes.LIFTING
        },
        {
            name: 'Couch to 5k',
            type: programTypes.RUNNING
        },
        {
            name: 'Learn to Swim',
            type: programTypes.SWIMMING
        },
        {
            name: 'Tour de France',
            type: programTypes.CYCLING
        }
    ];

    render() {
        return (<ProgramGroup programDetails={ this.programDetails } />);
    }
}
