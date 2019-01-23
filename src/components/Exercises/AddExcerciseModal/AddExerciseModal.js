import React, { Component } from 'react';
import { Modal, Button, Form, Dropdown, Input, TextArea } from 'semantic-ui-react';
import { exerciseTypes } from '../../../constants';

const exerciseTypeOptions = Object.values(exerciseTypes).map(exerciseType => {
  return({
    text: exerciseType,
    value: exerciseType
  });
});

const weightUnits = [
  { key: 'lb', text: 'lb', value: 'lb' },
  { key: 'kg', text: 'kg', value: 'kg' }
];

export default class AddExerciseModal extends Component {
  render() {
    return(
      <Modal 
        size='tiny' 
        trigger={<Button positive circular icon='add' className='add-exercise-button' />}
        centered={false}
        closeOnDimmerClick={false}
        closeIcon>
        <Modal.Header>Create New Exercise</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field required>
              <label>Exercise Name</label>
              <Input placeholder='Exercise Name' />
            </Form.Field>

            <Form.Field required>
              <label>Exercise Category</label>
              <Input placeholder='Exercise Category' />
            </Form.Field>

            <Form.Field required>
              <label>Exercise Type</label>
              <Dropdown placeholder='Select Exercise Type' fluid selection options={exerciseTypeOptions} />
            </Form.Field>

            <Form.Field>
              <label>Personal Record</label>
              <Input 
                placeholder='135' 
                action={<Dropdown button basic floating options={weightUnits} defaultValue='lb' />}/>
            </Form.Field>

            <Form.Field>
              <label>Notes</label>
              <TextArea autoHeight />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={this.close}>Cancel</Button>
            <Button
              positive
              content='Create'
              onClick={this.close}
            />
          </Modal.Actions>
      </Modal>
    );
  }
}