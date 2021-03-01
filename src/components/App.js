
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

import HomePage from "./HomePage";
import RetrievePage from "./RetrievePage";
import Error from "./Error";
import Navigation from "./Navigation";
import AddPage from "./AddPage";

/* This component is used for Routing to appropriate pages*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container className="w-100 p-3">
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/add" component={AddPage} />
              <Route path="/retrieve" component={RetrievePage} />
              <Route component={Error} />
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
