import { AsyncAction } from 'redux/async/AsyncAction';
import { loginAPI } from 'api/user';
import { LOGIN_USER, LOGOUT } from './constants';

export const UserActions = {
  login: new AsyncAction(LOGIN_USER, loginAPI),
  logout: () => ({
    type: LOGOUT,
  }),
};
