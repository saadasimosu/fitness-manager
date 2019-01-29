import React, { Component } from 'react';
import WeekPanel from './WeekPanel/WeekPanel';

export default class NewProgramExerciseEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dayDetails: [
        {
          day: 'Monday',
          description: 'Chest and Arms'
        },
        {
          day: 'Tuesday',
          description: 'Legs'
        },
        {
          day: 'Wednesday',
          description: 'Shoulder and Chest'
        },
        {
          day: 'Thursday',
          description: 'Back and Legs'
        },
        {
          day: 'Friday',
          description: 'Chest and Arms'
        },
        {
          day: 'Saturday',
          description: 'Rest'
        },
        {
          day: 'Sunday',
          description: 'Rest'
        }
      ], 
      activeDay: 'Monday'
    };
  }
  render() {
    return(
      <WeekPanel dayDetails={this.state.dayDetails} activeDay={this.state.activeDay} />
    );
  }
}