import { RouterGenerator } from 'common/utils/routerGenerator';
import Portlet from './Portlet';
import Spinners from './Spinners';
import Alerts from './Alerts';
import Progress from './Progress';

export const routes = new RouterGenerator('/components')
  .addRoute('/portlet', Portlet, true)
  .addRoute('/spinners', Spinners, true)
  .addRoute('/alerts', Alerts, true)
  .addRoute('/progress', Progress, true)
  .getRoutes();
