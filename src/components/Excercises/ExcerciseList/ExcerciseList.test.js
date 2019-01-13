import React from 'react';
import ReactDOM from 'react-dom';
import ExcerciseList from './ExcerciseList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExcerciseList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
