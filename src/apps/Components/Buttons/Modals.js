import React from 'react';
import ReactModal from './ModalReact/modal';
import VisibleModal from './ModalRedux/containers/visibleModal';

const ModalExample = () => (
  <div>
    <ReactModal />
    <VisibleModal />
  </div>
);

export default ModalExample;
