import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ExerciseItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: props.exerciseName,
      type: props.exerciseType,
      category: props.exerciseCategory
    };
  }

  deleteExercise = e => {
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    return(
      <List.Item
      as={Link}
      to={`${this.props.match.url}/${this.state.name}`}>
        <Icon name='delete' color='gray' className='delete-exercise-icon' onClick={this.deleteExercise}/>
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