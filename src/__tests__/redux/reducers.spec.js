import { createStore } from 'redux';
import rootReducer from 'redux/reducers';

describe('Root reducer', () => {
  const store = createStore(rootReducer());

  it('should return initial state', () => {
    expect(store.getState()).toBeDefined();
  });
});
