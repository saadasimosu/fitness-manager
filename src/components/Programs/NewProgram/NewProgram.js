import React, { Component, Fragment } from 'react';
import NewProgramDetails from './NewProgramDetails/NewProgramDetails';
import MultiStepFormButtons from './MultiStepFormButtons/MultiStepFormButtons';
import { Divider } from 'semantic-ui-react';

export default class NewProgram extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      step: 1,
      formValues: {
        programName: '',
        programType: '',
        programDescription: ''
      }
    }
  }

  handleChange = input => event => {
    this.setState( { [input] : event.target.value });
  }

  render() {
    const { step, formValues } = this.state;
    let currentForm;
    
    switch(step) {
      default:
      case 1:
        currentForm = <NewProgramDetails
                        handleChange = {this.handleChange}
                        formValues = {formValues}
                      />
        break;
      case 2:
        currentForm = <div></div>
        break;
    }

    return (
      <Fragment>
        {currentForm}
        <Divider hidden />
        <MultiStepFormButtons numSteps={2} currentStep={step} />
      </Fragment>
    );

  }
}