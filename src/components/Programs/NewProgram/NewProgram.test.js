import React from 'react';
import ReactDOM from 'react-dom';
import NewProgram from './NewProgram';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProgram />, div);
  ReactDOM.unmountComponentAtNode(div);
});
