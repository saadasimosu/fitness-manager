import React from 'react';
import ReactDOM from 'react-dom';
import AddExerciseModal from './AddExerciseModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddExerciseModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
