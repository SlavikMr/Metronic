import { RouterGenerator } from 'common/utils/routerGenerator';
import Base from './Base';
import Portlets from './Portlets';
import Buttons from './Buttons';

export const routes = new RouterGenerator('/components')
  .addRoute('/base', Base)
  .addRoute('/portlets', Portlets)
  .addRoute('/buttons', Buttons)
  .getRoutes();
