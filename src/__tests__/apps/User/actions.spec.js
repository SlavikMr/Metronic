import { UserActions } from 'apps/User/actions';
import { LOGOUT } from 'apps/User/constants';

describe('User actions', () => {
  it('should create an action to logout', () => {
    const expectedAction = {
      type: LOGOUT,
    };

    expect(UserActions.logout()).toEqual(expectedAction);
  });

  it('should create an action to login', () => {
    const payload = 'some-data';
    const expectedAction = {
      type: UserActions.login.types.REQUEST,
      payload,
      apiAction: true,
      error: false,
      meta: undefined,
    };

    expect(UserActions.login.request(payload)).toEqual(expectedAction);
  });
});
