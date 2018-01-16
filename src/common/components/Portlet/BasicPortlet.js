import React from 'react';
import PortletHeader from './PortletParts/PortletHeader';
import PortletBody from './PortletParts/PortletBody';
import Portlet from './Portlet';

// const BasicPortlet = ({title, subtitle, children, icon}) => {
//   return (
//     <div class="m-portlet m-portlet--mobile">
//       <PortletHeader title={title} subtitle={subtitle} icon={icon}/>
//     <PortletBody>{children}</PortletBody>
//     </div>
//   )
// }

const BasicPortlet = ({children}) => {
  return (
    <div class="m-portlet">
      {children}
    </div>
  )
}

export default BasicPortlet;
