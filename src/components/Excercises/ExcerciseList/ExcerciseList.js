import React, { Component } from 'react';
import { Grid, Segment, List, Image, Header } from 'semantic-ui-react';
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
        <Header as='h3' textAlign='center' attached='top'>
          {this.state.listType[0].toUpperCase() + this.state.listType.slice(1)}
          <br />
          <Image src={programTypeToLogoMap[this.state.listType]} size='small' centered />
        </Header>
        <Segment attached color={programTypeToColorMap[this.state.listType]}>
          
        
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