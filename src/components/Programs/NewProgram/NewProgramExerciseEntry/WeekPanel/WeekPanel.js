import React, { Component } from 'react';
import { Card, Container, Input } from 'semantic-ui-react';

export default class WeekPanel extends Component {
  render() {
    return(
      <Container>
        <Card.Group centered>
          {this.props.dayDetails.map(dayDetail => {
            const active = dayDetail.day === this.props.activeDay;

            return(
              <Card style={{width: '175px'}}> 
                <Card.Content>
                  <Card.Header>{dayDetail.day}</Card.Header>
                  <Card.Description>
                    {active ? ( 
                      <Input fluid placeholder='Description' defaultValue={dayDetail.description} />
                    ) : (
                      dayDetail.description
                    )}
                    
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Container>
    );
  }
}