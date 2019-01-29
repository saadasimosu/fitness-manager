import React from 'react';
import ReactDOM from 'react-dom';
import WeekPanel from './WeekPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeekPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
