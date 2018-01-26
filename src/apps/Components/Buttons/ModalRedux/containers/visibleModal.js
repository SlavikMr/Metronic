import { connect } from 'react-redux';
import { toggleState } from '../actions';
import { Modal } from '../components/modal';

const mapStateToProps = state => (
  {
    isOpen: state.get('modal').get('show'),
  }
);

const mapDispatchToProps = dispatch => (
  {
    toggle: () => {
      dispatch(toggleState());
    },
  }
);

const VisibleModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

export default VisibleModal;
