import React from "react";
import {Route, Switch} from "react-router-dom";
import Details from "./containers/details";
import List from "./containers/list";
import Home from "./containers/home";
import SearchBar from "./components/searchBar";

const Routes = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <div className="main-container">
        <Switch>
          <Route exact={true} path="/items/:id">
            <Details />
          </Route>
          <Route path="/items">
            <List />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default Routes;