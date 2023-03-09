import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  ControlPanel,
  Song,
  SongSearch,
  NotFound,
  MainMenu,
  SongDetail,
} from "../../components";

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="three columns banner">
            <Link to="/">
              <h4>
                Song<b>App</b>
              </h4>
            </Link>
          </div>
          <div className="nine columns menu">
            <div className="row">
              <div className="six columns">
                <MainMenu />
              </div>
              <div className="six columns">
                <SongSearch />
              </div>
            </div>
          </div>
        </div>
        <div className="row line">
          <div className="twelve columns">
            <hr />
          </div>
        </div>

        <div className="row content">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <Song />
                </React.Fragment>
              )}
            />

            <Route path="/control-panel" component={ControlPanel} />
            <Route path="/detail/:id" component={SongDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
