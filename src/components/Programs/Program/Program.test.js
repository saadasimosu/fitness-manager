import React from 'react';
import ReactDOM from 'react-dom';
import Program from './Program';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Program />, div);
  ReactDOM.unmountComponentAtNode(div);
});
