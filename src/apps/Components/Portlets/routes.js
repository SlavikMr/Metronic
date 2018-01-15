import { RouterGenerator } from 'common/utils/routerGenerator';
import Base from './Base';

export const routes = new RouterGenerator('/components/portlets')
  .addRoute('/base', Base, true)
  .getRoutes();
