import React from 'react';
import Portlet from './Portlet';

const PortletNonShadow = ({ children, ...props }) => (
    <Portlet nonShadow {...props}>
      {children}
    </Portlet>
);

export default PortletNonShadow;
