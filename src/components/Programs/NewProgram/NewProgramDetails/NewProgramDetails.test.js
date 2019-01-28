import React from 'react';
import ReactDOM from 'react-dom';
import NewProgramDetails from './NewProgramDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProgramDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
