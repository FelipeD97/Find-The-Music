import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import Artists from "./components/artists/Artists";
import Artist from "./components/artists/Artist";

import { Provider } from "./context";

import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path="/artists/:id" component={Artists} />
              <Route exact path="/artist/:id" component={Artist} />
            </Switch>
          </div> 
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
