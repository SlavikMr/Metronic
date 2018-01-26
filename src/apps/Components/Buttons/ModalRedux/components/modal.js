import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal as BModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Modal = ({ isOpen, toggle }) => (
  <div>
    <Button color="danger" onClick={toggle}>ToggleRedux</Button>
    <BModal isOpen={isOpen}>
      <ModalHeader onClick={toggle}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </BModal>
  </div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
