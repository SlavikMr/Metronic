import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import Body from './PortletParts/Body';
import Footer from './PortletParts/Footer';
import Header from './PortletParts/Header';
import HeaderCaption from './PortletParts/HeaderCaption';
import Title from './PortletParts/Title';
import Tools from './PortletParts/Tools';
import ToolsItem from './PortletParts/ToolsItem';


const Portlet = ({
  rounded = false,
  nonShadow = false,
  bordered = false,
  semiBordered = false,
  smallHead = false,
  dark = false,
  children = null,
  bg = '',
}) => {
  const portletClass = ClassNames(
    { 'm-portlet': true },
    { 'm-portlet--rounded': rounded },
    { 'm-portlet--unair': nonShadow },
    { 'm-portlet--bordered': bordered || semiBordered },
    { 'm-portlet--bordered-semi': semiBordered || dark || bg },
    { 'm-portlet--head-sm': smallHead },
    { 'm-portlet--skin-dark': dark || bg },
    { [`m--bg-${bg}`]: bg },
  );
  return (
    <div className={portletClass}>
      {children}
    </div>
  );
};

Portlet.propTypes = {
  rounded: PropTypes.bool.isRequired,
  nonShadow: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  semiBordered: PropTypes.bool.isRequired,
  smallHead: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  bg: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Portlet.Body = Body;
Portlet.Footer = Footer;
Portlet.Header = Header;
Portlet.HeaderCaption = HeaderCaption;
Portlet.Title = Title;
Portlet.Tools = Tools;
Portlet.ToolsItem = ToolsItem;

export { Portlet };
