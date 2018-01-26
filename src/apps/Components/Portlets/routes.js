import { RouterGenerator } from 'common/utils/routerGenerator';
import Base from './Base';
import Tabbed from './Tabbed';

export const routes = new RouterGenerator('/components/portlets')
  .addRoute('/base', Base, true)
  .addRoute('/tabbed', Tabbed, true)
  .getRoutes();
