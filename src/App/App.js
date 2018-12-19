import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./../modules/Nav/Nav";
import Home from "./../modules/Home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <footer>footer</footer>
        </div>
      </Router>
    );
  }
}

export default App;
