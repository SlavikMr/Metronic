import Home from 'apps/Home';
import Components from 'apps/Components';
import { RouterGenerator } from 'common/utils/routerGenerator';

export const routes = new RouterGenerator('/')
  .addRoute('/', Home, true)
  .addRoute('/components', Components)
  .getRoutes();
