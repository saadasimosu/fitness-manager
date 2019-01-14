import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class ExerciseItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: props.exerciseName,
      type: props.exerciseType,
      category: props.exerciseCategory
    };
  }

  render() {
    return(
      <List.Item>
      <List.Content>
        <List.Header>{this.state.name}</List.Header>
        <List.Description>
          {this.state.category}
        </List.Description>
      </List.Content>
    </List.Item>
    );
  }
}