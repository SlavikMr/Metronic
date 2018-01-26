import Immutable from 'immutable';

const initState = Immutable.fromJS({ show: false });

const modal = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_STATE':
      return state.set('show', !state.get('show'));

    default:
      return state;
  }
};

export default modal;
