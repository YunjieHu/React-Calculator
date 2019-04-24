import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="App" style={{'marginTop':'2em'}}>
        <Calculator/>
      </div>
    );
  }
}

export default App;
