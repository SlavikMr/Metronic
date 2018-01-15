import { RouterGenerator } from 'common/utils/routerGenerator';
import DefaultStyle from './DefaultStyle';
import SquareStyle from './SquareStyle';

export const routes = new RouterGenerator('/components/buttons')
  .addRoute('/default', DefaultStyle, true)
  .addRoute('/square', SquareStyle, true)
  .getRoutes();
