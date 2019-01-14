import React, { Component, Fragment } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import Programs from './components/Programs/Programs';
import Exercises from './components/Exercises/Exercises';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Fragment>
            <NavBar />
            <Route exact path ='/' component={Home} />
            <Route path ='/programs' component={Programs} />
            <Route path='/exercises' component={Exercises} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
