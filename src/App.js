import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//

//
import Home from "./components/home/Home";
import About from "./components/about/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="wrapper-app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>{" "}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
