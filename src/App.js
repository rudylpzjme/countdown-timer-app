import React, { Component } from 'react';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountdownTimer className="CountdownTimer" />
      </div>
    );
  }
}

export default App;
