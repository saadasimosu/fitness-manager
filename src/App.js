import React, { Component, Fragment } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Switch>
              <Route exact path ='/' component={Home} />
              <Route exact path ='/programs' component={Programs} />
              <Route exact path='/programs/new' component={Home} />
              <Route exact path='/programs/:id' component={Home} />
              <Route exact path='/exercises' component={Exercises} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
