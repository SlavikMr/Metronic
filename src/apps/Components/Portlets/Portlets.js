import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithSubRoutes from 'common/components/RouteWithSubRoutes';
import { routes } from './routes';

const ButtonsDemo = () => (
  <Switch>
    {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
    <Redirect from="*" to="/not-found" />
  </Switch>
);

export default ButtonsDemo;
