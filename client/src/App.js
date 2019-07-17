import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// COMPONENTS
import AppHeader from "./components/layouts/header/AppHeader";
import RoutingComponents from "./components/common/routing/Routes";
import AppFooter from "./components/layouts/footer/AppFooter";

// REDUX
import Store from "./store";
import { loadUser } from "./actions/authAction";

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={Store}>
      <Router>
        <Fragment>
          <header className="mb-5">
            <AppHeader />
          </header>
          <main id="App">
            <Switch>
              <Route component={RoutingComponents} />
            </Switch>
          </main>
          <footer className="mt-5">
            <AppFooter />
          </footer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
