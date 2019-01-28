import React from 'react';
import ReactDOM from 'react-dom';
import MultiStepFormButtons from './MultiStepFormButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultiStepFormButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
