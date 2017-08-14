import React, { Component } from 'react';
import './App.css';
import { Menu, Icon } from 'antd';
import  Panel  from './components/Panel';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Panel/>
      </div>
    );
  }
}

export default App;
