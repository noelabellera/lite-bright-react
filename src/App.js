import React, { Component } from 'react';
import HomePage from './components/HomePage';
import Header from './components/Header';
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
           <Route exact path='/' render={() => 
            <HomePage />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
