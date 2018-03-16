import React, { Component } from 'react';
import Header from './components/Header';
import CirclesBoard from './components/CirclesBoard';
import ColorSelector from './components/ColorSelector';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Page">
          <CirclesBoard />
          <ColorSelector />
        </div>
      </div>
    );
  }
}

export default App;
