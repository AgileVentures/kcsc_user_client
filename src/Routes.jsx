import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import IndexView from "./views/IndexView";
import AboutView from "./views/AboutView";
import SearchSelfCareView from "./views/SearchSelfCareView";
import ServicesView from "./views/ServicesView";

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route
          exact
          path="/services"
          render={() => <App component={<ServicesView />} />}
        />
        <Route
          exact
          path="/about"
          render={() => <App component={<AboutView />} />}
        />
        <Route
          exact
          path="/search"
          render={() => <App component={<SearchSelfCareView />} />}
        />
        <Route
          exact
          path="/"
          render={() => <App component={<IndexView />} />}
        />        
      </Switch>
    </Router>
  );
};

export default Routes;
