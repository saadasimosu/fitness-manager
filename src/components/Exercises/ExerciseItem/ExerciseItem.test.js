import React from 'react';
import ReactDOM from 'react-dom';
import ExerciseItem from './ExerciseItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExerciseItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
