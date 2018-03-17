import React, { Component } from 'react';
import Header from './components/Header';
import CirclesBoard from './components/CirclesBoard';
import ColorSelectorBoard from './components/ColorSelectorBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Page">
          <CirclesBoard />
          <ColorSelectorBoard />
        </div>
      </div>
    );
  }
}

export default App;
