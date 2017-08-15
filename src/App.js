import React, { Component } from 'react';
import './App.css';
import  Panel  from './components/Panel';
import Data from './components/Data';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import {browserHistory} from 'react-router';


class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <Route path="/" component={Panel} />
        </div>
      </Router>
    );
  }
}

export default App;
