import React from 'react';
import { TabPane as StrapTabPane } from 'reactstrap';
import PropTypes from 'prop-types';

const TabPane = ({ children, ...props }) => (
  <StrapTabPane {...props}>
    {children}
  </StrapTabPane>
);

TabPane.propTypes = {
  children: PropTypes.node,
};

TabPane.defaultProps = {
  children: null,
};

export { TabPane };
