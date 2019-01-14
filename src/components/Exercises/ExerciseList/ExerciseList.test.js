import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseList from './ExerciseList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExerciseList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
