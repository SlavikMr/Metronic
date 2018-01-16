import React from 'react';
import Portlet from './Portlet';

const PortletRounded = ({ children, ...props }) => (
  <Portlet rounded {...props}>
    {children}
  </Portlet>
);


export default PortletRounded;
