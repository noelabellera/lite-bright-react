import React, { Component } from 'react';
import HomePage from './components/HomePage';
import Header from './components/Header';
import About from './components/About';
import NavBar from './components/NavBar';
import colors from './seeds';
import { Switch, Route } from 'react-router-dom';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      colors,
      selColorIdx: 0
    };
  }

  handleColorSelect = (colorIdx) => {
    console.log('Color Selected');
    this.setState({
      selColorIdx: colorIdx
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />


        <Switch>
          <Route exact path='/about' render={() => 
            <About />
          } />
           <Route exact path='/' render={() => 
            <HomePage colors={this.state.colors}
                      handleColorSelect={this.handleColorSelect}
                      selColorIdx={this.selColorIdx} />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
