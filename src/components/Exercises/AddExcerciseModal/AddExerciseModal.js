import React, { Component, Fragment } from 'react';
import { Modal, Button, Form, Dropdown, Input, TextArea } from 'semantic-ui-react';
import { programTypes } from '../../../constants';
import { capitalize } from '../../../utils';

const exerciseTypeOptions = Object.values(programTypes).map(programType => {
  const capitalizedProgramType = capitalize(programType);
  return({
    text: capitalizedProgramType,
    value: capitalizedProgramType
  });
});

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
                <Input placeholder='Exercise Name' />
              </Form.Field>

              <Form.Field required>
                <label>Exercise Category</label>
                <Input placeholder='Exercise Category' />
              </Form.Field>

              <Form.Field required>
                <label>Exercise Type</label>
                <Dropdown placeholder='Select Exercise Type' fluid selection options={exerciseTypeOptions} defaultValue={capitalize(this.props.exerciseType)} />
              </Form.Field>

              <Form.Field>
                <label>Personal Record</label>
                <Input 
                  placeholder='135' 
                  action={<Dropdown button basic floating options={weightUnits} defaultValue='lb' />}/>
              </Form.Field>

              <Form.Field>
                <label>YouTube Video</label>
                <Input placeholder='Video Link' />
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