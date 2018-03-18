import React, { Component } from 'react';
import Header from './components/Header';
import CirclesBoard from './components/CirclesBoard';
import ColorSelectorBoard from './components/ColorSelectorBoard';
import About from './components/About';
import colors from './seeds';
import { Switch, Route } from 'react-router-dom';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      colors
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/about' render={() => 
            <About />
          } />
        </Switch>
        <div className="Page">
          <CirclesBoard />
          <ColorSelectorBoard color={this.state.colors}/>
        </div>
      </div>
    );
  }
}

export default App;
