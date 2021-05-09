// React, Router
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routes
import routes from "./Routes";

// Components
import LoadingIndicator from "../components/LoadingIndicator/index";

const RouteCreator = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={() => (
      <Layout>
        <Component />
      </Layout>
    )}
  />
);

const MainRouter = () => (
  <Router>
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        {routes.map((route) => (
          <RouteCreator
            key={route.path}
            path={route.path}
            component={route.component}
            layout={route.layout}
          />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

export default MainRouter;
