import { LOCATION_CHANGE } from 'react-router-redux';
import { UserActions } from 'apps/User/actions';
import { asyncSaga } from './async/asyncSaga';

export const injectSagas = (sagaMiddleware) => {
  sagaMiddleware.run(asyncSaga(UserActions.login, [LOCATION_CHANGE]));
};
