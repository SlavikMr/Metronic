import { RouterGenerator } from 'common/utils/routerGenerator';
import DefaultStyle from './DefaultStyle';
import SquareStyle from './SquareStyle';
import PillStyle from './PillStyle';
import AirStyle from './AirStyle';
import BtnGroup from './ButtonGroup';

export const routes = new RouterGenerator('/components/buttons')
  .addRoute('/default', DefaultStyle, true)
  .addRoute('/square', SquareStyle, true)
  .addRoute('/pill', PillStyle, true)
  .addRoute('/air', AirStyle, true)
  .addRoute('/group', BtnGroup, true)
  .getRoutes();
