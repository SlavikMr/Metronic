import { combineReducers } from 'redux-immutable';

import { routerReducer } from 'apps/Router';
import { userReducer } from 'apps/User';

const rootReducer = asyncReducers => (
  combineReducers({
    router: routerReducer,
    user: userReducer,
    ...asyncReducers,
  })
);

export default rootReducer;
