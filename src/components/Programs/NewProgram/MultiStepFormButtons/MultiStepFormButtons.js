import React, { Component, Fragment } from 'react';
import { Button } from 'semantic-ui-react';

export default class MultiStepFormButtons extends Component {
  render() {
    const { numSteps, currentStep } = this.props;

    return(
      <Fragment>
        { currentStep > 1 && <Button content='Back' icon='left arrow' labelPosition='left' /> }
        { currentStep === numSteps ? (
          <Button positive content='Submit' />
        ) : (
          <Button content='Next' icon='right arrow' labelPosition='right' />
        )}
      </Fragment>
    );
  }
}