import React, { Component } from 'react';
import { Grid, Segment, List, Image, Header, Input } from 'semantic-ui-react';
import { programTypeToColorMap, programTypeToLogoMap } from '../../../constants';
import ExerciseItem from '../ExerciseItem/ExerciseItem';

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listType: props.listType,
      exerciseItems: props.exerciseItems,
      filteredExerciseItems: props.exerciseItems,
      isLoading: false,
    };
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  handleSearchChange = (e, { value }) => {
    this.setState({
      ...this.state,
      isLoading: true
    });

    setTimeout(() => {
      const regExp = new RegExp(value, 'i')
      const filteredExerciseItems = this.state.exerciseItems.filter(exerciseItem => {
        return regExp.test(exerciseItem.name);
      });
  
      this.setState({
        ...this.state,
        filteredExerciseItems,
        isLoading: false
      });
    }, 500);
  }
  
  render() {
    const { listType, filteredExerciseItems, isLoading } = this.state;

    return(
      <Grid.Column>
        <Header as='h3' textAlign='center' attached='top'>
          {listType[0].toUpperCase() + listType.slice(1)}
          <br />
          <Image src={programTypeToLogoMap[listType]} size='small' centered />
        </Header>
        <Segment attached color={programTypeToColorMap[listType]}>
            <Input
              loading={isLoading}
              icon='search'
              fluid={true}
              placeholder='Search...'
              onChange={this.debounce(this.handleSearchChange, 100, false)}
            />

          <List divided selection textalign='left'>
            {filteredExerciseItems.map(exerciseItem => {
              return(<ExerciseItem key={exerciseItem.name} exerciseName={exerciseItem.name} exerciseType={exerciseItem.type} exerciseCategory={exerciseItem.category} />)
            })}
          </List>
        </Segment>
      </Grid.Column>
    );
  }
}