import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import HomeView from "./views/HomeView";
import SearchView from "./views/SearchView";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/search/:searchTerm">
            <SearchView />
          </Route>
          <Route exact path={["/search/", "/search", "/*/*/*"]}>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
