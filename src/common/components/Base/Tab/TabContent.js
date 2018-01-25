import React from 'react';
import { TabContent as StrapTabContent } from 'reactstrap';
import PropTypes from 'prop-types';

const TabContent = ({ children, ...other }) => (
  <StrapTabContent {...other}>
    {children}
  </StrapTabContent>
);

TabContent.propTypes = {
  children: PropTypes.node,
};

TabContent.defaultProps = {
  children: null,
};

export { TabContent };
