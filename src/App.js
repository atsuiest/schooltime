import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import About from './components/views/About';
import Contact from './components/views/Contact';
import Corporative from './components/views/Corporative';
import Institutional from './components/views/Institutional';
import Schools from './components/views/Schools';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/corporative" component={Corporative} />
            <Route exact path="/institutional" component={Institutional} />
            <Route exact path="/schools" component={Schools} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
