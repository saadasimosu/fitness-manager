import React from 'react';
import ReactDOM from 'react-dom';
import { ExcerciseItem } from './ExcerciseItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExcerciseItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
