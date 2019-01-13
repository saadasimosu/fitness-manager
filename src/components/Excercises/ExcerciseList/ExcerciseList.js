import React, { Component } from 'react';
import { Grid, Segment, List, Image } from 'semantic-ui-react';
import { programTypeToColorMap, programTypeToLogoMap } from '../../../constants';
import ExcerciseItem from '../ExcerciseItem/ExcerciseItem';

export default class ExcerciseList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listType: props.listType,
      excerciseItems: props.excerciseItems
    };
  }

  render() {
    return(
      <Grid.Column>
        <Segment color={programTypeToColorMap[this.state.listType]}>
          <Grid>
            <Grid.Row centered>
              {this.state.listType[0].toUpperCase() + this.state.listType.slice(1)}
            </Grid.Row>
          </Grid>

          <Image size='mini' centered src={programTypeToLogoMap[this.state.listType]} /> 
          
          <List divided selection textAlign='left'>
            {this.state.excerciseItems.map((excerciseItem, index) => {
              return(<ExcerciseItem key={index} excerciseName={excerciseItem.name} excerciseType={excerciseItem.type} excerciseCategory={excerciseItem.category} />)
            })}
          </List>
        </Segment>
      </Grid.Column>
    );
  }
}