import React, { Component } from 'react';
import { Form, Input, Dropdown, Container } from 'semantic-ui-react';
import { programTypeOptions } from '../../../../constants';

export default class NewProgramDetails extends Component {
  render() {
    const { formValues } = this.props;

    return(
        <Form> 
          <Container textAlign='left' text>
            <Form.Field required>
              <label>Program Name</label>
              <Input defaultValue={formValues.programName} />
            </Form.Field>

            <Form.Field required>
              <label>Program Type</label>
              <Dropdown fluid selection
                options={programTypeOptions} 
                defaultValue={formValues.programType} 
              />
            </Form.Field>

            <Form.Field>
              <label>Program Description</label>
              <Input defaultValue={formValues.programDescription} />
            </Form.Field>
          </Container>
        </Form>
    );
  }
}