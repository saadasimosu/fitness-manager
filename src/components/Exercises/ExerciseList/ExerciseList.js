import React, { Component } from 'react';
import { Grid, Segment, List, Image, Header, Input } from 'semantic-ui-react';
import { programTypeToColorMap, programTypeToLogoMap } from '../../../constants';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import AddExerciseModal from '../AddExcerciseModal/AddExerciseModal';

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

  handleSearchChange = (e, { value }) => {
    this.setState({
      ...this.state,
      isLoading: true
    });

    const regExp = new RegExp(value, 'i')
    const filteredExerciseItems = this.state.exerciseItems.filter(exerciseItem => {
      return regExp.test(exerciseItem.name);
    });

    this.setState({
      ...this.state,
      filteredExerciseItems,
      isLoading: false
    });
  }
  
  render() {
    const { listType, filteredExerciseItems, isLoading } = this.state;

    return(
      <Grid.Column>
        <Header as='h3' textAlign='center' attached='top'>
          {listType}
          <br />
          <Image src={programTypeToLogoMap[listType]} size='small' centered />
        </Header>
        <Segment attached color={programTypeToColorMap[listType]}>
          <Input
            loading={isLoading}
            icon='search'
            fluid={true}
            placeholder='Search...'
            onChange={this.handleSearchChange}
          />

          <List divided selection textalign='left'>
            <AddExerciseModal exerciseType={listType} />

            {filteredExerciseItems.map(exerciseItem => {
              return(<ExerciseItem 
                        key={exerciseItem.name} 
                        exerciseName={exerciseItem.name} 
                        exerciseType={exerciseItem.type} 
                        exerciseCategory={exerciseItem.category} 
                        match={this.props.match}
                    />
                    );
            })}
          </List>
        </Segment>
      </Grid.Column>
    );
  }
}