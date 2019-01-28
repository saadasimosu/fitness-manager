import React, { Component, Fragment } from 'react';
import { Modal, Button, Form, Dropdown, Input, TextArea } from 'semantic-ui-react';
import { programTypeOptions } from '../../../constants';

const weightUnits = [
  { key: 'lb', text: 'lb', value: 'lb' },
  { key: 'kg', text: 'kg', value: 'kg' }
];

export default class AddExerciseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return(
      <Fragment>
        <Button positive circular icon='add' className='add-exercise-button' onClick={this.open} />
        <Modal
          open={open}
          size='tiny' 
          centered={false}
          onClose={this.close}
          closeOnDimmerClick={false}
          closeOnEscape={true}
          closeIcon>
          <Modal.Header>Create New Exercise</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label>Exercise Name</label>
                <Input />
              </Form.Field>

              <Form.Field required>
                <label>Exercise Category</label>
                <Input />
              </Form.Field>

              <Form.Field required>
                <label>Exercise Type</label>
                <Dropdown fluid selection options={programTypeOptions} defaultValue={this.props.exerciseType} />
              </Form.Field>

              <Form.Field>
                <label>Personal Record</label>
                <Input 
                  action={<Dropdown button basic floating options={weightUnits} defaultValue='lb' />}/>
              </Form.Field>

              <Form.Field>
                <label>YouTube Video</label>
                <Input />
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
      </Fragment>
    );
  }
}