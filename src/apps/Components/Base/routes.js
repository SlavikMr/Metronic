import { RouterGenerator } from 'common/utils/routerGenerator';
import Alerts from './Alerts';
import Progress from './Progress';
import Spinners from './Spinners';
import Tabs from './Tabs';
import Navs from './Navs';

export const routes = new RouterGenerator('/components/base')
  .addRoute('/alerts', Alerts, true)
  .addRoute('/progress', Progress, true)
  .addRoute('/spinners', Spinners, true)
  .addRoute('/tabs', Tabs, true)
  .addRoute('/navs', Navs, true)
  .getRoutes();
