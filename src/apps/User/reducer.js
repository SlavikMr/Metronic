import * as Cookies from 'js-cookie';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

import { asyncReducer } from 'redux/async/asyncReducer';
import { UserActions } from './actions';
import { AUTH_COOKIE_KEY, LOGOUT, LOGIN_USER } from './constants';

const initialState = Immutable.fromJS({
  isAuthenticated: false,
  token: null,
  email: null,
});

let cookieState = Cookies.get(AUTH_COOKIE_KEY);
if (cookieState) {
  cookieState = Immutable.fromJS(JSON.parse(cookieState));
}

const profileReducer = (state = cookieState || initialState, action) => {
  switch (action.type) {
    case UserActions.login.types.SUCCESS: {
      const newState = state
        .set('isAuthenticated', true)
        .set('token', action.payload.token);
      Cookies.set(AUTH_COOKIE_KEY, newState.toJS(), { expires: 14 }); // All cookies must die!
      return newState;
    }
    case LOGOUT: {
      Cookies.remove(AUTH_COOKIE_KEY);
      return initialState;
    }
    default:
      return state;
  }
};

const userReducer = combineReducers({
  profile: profileReducer,
  login: asyncReducer(LOGIN_USER),
});

export { userReducer, profileReducer, initialState };
