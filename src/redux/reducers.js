import { combineReducers } from 'redux-immutable';

import { routerReducer } from 'apps/Router';
import { userReducer } from 'apps/User';
import modal from '../apps/Components/Buttons/ModalRedux/reducers/switch';

const rootReducer = asyncReducers => (
  combineReducers({
    router: routerReducer,
    user: userReducer,
    ...asyncReducers,
    modal,
  })
);

export default rootReducer;
