import React, { Component } from 'react';
import { Grid, Segment, List, Image, Header } from 'semantic-ui-react';
import { programTypeToColorMap, programTypeToLogoMap } from '../../../constants';
import ExerciseItem from '../ExerciseItem/ExerciseItem';

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listType: props.listType,
      exerciseItems: props.exerciseItems
    };
  }

  render() {
    return(
      <Grid.Column>
        <Header as='h3' textAlign='center' attached='top'>
          {this.state.listType[0].toUpperCase() + this.state.listType.slice(1)}
          <br />
          <Image src={programTypeToLogoMap[this.state.listType]} size='small' centered />
        </Header>
        <Segment attached color={programTypeToColorMap[this.state.listType]}>
          
        
          <List divided selection textAlign='left'>
            {this.state.exerciseItems.map((exerciseItem, index) => {
              return(<ExerciseItem key={index} exerciseName={exerciseItem.name} exerciseType={exerciseItem.type} exerciseCategory={exerciseItem.category} />)
            })}
          </List>
        </Segment>
      </Grid.Column>
    );
  }
}