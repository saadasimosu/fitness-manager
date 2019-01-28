import React from 'react';
import ReactDOM from 'react-dom';
import NewProgramExerciseEntry from './NewProgramExerciseEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProgramExerciseEntry />, div);
  ReactDOM.unmountComponentAtNode(div);
});
