import React from 'react';
import ReactDOM from 'react-dom';
import Excercises from './Excercises';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Excercises />, div);
  ReactDOM.unmountComponentAtNode(div);
});
