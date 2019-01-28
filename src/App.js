import React, { Component, Fragment } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';
import Programs from './components/Programs/Programs';
import Exercises from './components/Exercises/Exercises';
import NewProgram from './components/Programs/NewProgram/NewProgram';

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
              <Route path='/programs/new' component={NewProgram} />
              <Route path='/programs/:id' component={Home} />
              <Route exact path='/exercises' component={Exercises} />
              <Route path='/exercises/new' component={Home} />
              <Route path='/exercises/:id' component={Home} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
