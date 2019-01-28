import React, { Component, Fragment } from 'react';
import { Divider } from 'semantic-ui-react';
import NewProgramDetails from './NewProgramDetails/NewProgramDetails';
import NewProgramExerciseEntry from './NewProgramExerciseEntry/NewProgramExerciseEntry';
import MultiStepFormButtons from './MultiStepFormButtons/MultiStepFormButtons';

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

  changeStep = (newStep) => {
    this.setState({ 
      step: newStep
    });
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
        currentForm = <NewProgramExerciseEntry />
        break;
    }

    return (
      <Fragment>
        {currentForm}
        <Divider hidden />
        <MultiStepFormButtons numSteps={2} currentStep={step} changeStep={this.changeStep} />
      </Fragment>
    );

  }
}