import * as Cookies from 'js-cookie';
import Immutable from 'immutable';

import { initialState, profileReducer } from 'apps/User/reducer';
import { LOGIN_USER, AUTH_COOKIE_KEY, LOGOUT } from 'apps/User/constants';

describe('User reducer', () => {
  describe('[profile] reducer', () => {
    it('should return the initial state', () => {
      expect(profileReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOGIN_USER_SUCCESS', () => {
      expect(profileReducer(undefined, {
        type: `${LOGIN_USER}_SUCCESS`,
        payload: { token: 'token', email: 'test@mail.com' },
      })).toEqual(Immutable.fromJS({
        isAuthenticated: true,
        token: 'token',
        email: null,
      }));
      expect(Cookies.get(AUTH_COOKIE_KEY)).toEqual({
        isAuthenticated: true,
        token: 'token',
        email: null,
      });
    });

    it('should handle LOGOUT', () => {
      expect(profileReducer(undefined, {
        type: LOGOUT,
        payload: { token: 'token' },
      })).toEqual(initialState);
    });
  });
});
