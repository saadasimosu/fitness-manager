import React from 'react';
import ReactDOM from 'react-dom';
import Programs from './Programs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Programs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
