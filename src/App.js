import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';

import { Login, loginRequired } from 'apps/User';
import NotFound from 'apps/NotFound';
import asyncComponent from 'common/components/AsyncComponent';
import { history } from 'redux/configureStore';

const Dashboard = asyncComponent(() => (
  import('apps/Dashboard').then(module => module.default).then(module => (
    new Promise((resolve) => { // TODO: Fake timeout to see loader
      setTimeout(() => {
        resolve(module);
      }, 400);
    })),
  )
));

const App = () => (
  <ConnectedRouter basename="/" history={history}>
    <div>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/not-found" exact component={NotFound} />
        <Route component={loginRequired(Dashboard)} />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default App;
