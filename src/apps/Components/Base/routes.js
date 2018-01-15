import { RouterGenerator } from 'common/utils/routerGenerator';
import Alerts from './Alerts';
import Progress from './Progress';
import Spinners from './Spinners';

export const routes = new RouterGenerator('/components/base')
  .addRoute('/alerts', Alerts, true)
  .addRoute('/progress', Progress, true)
  .addRoute('/spinners', Spinners, true)
  .getRoutes();
