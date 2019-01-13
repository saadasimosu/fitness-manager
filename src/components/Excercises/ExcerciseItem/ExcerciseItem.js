import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class ExcerciseItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: props.excerciseName,
      type: props.excerciseType,
      category: props.excerciseCategory
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