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


const Portlet = ({ rounded, nonShadow, bordered, semiBordered, smallHead, dark, bg, children }) => {
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
  rounded: PropTypes.bool,
  nonShadow: PropTypes.bool,
  bordered: PropTypes.bool,
  semiBordered: PropTypes.bool,
  smallHead: PropTypes.bool,
  dark: PropTypes.bool,
  bg: PropTypes.string,
  children: PropTypes.node,
};

Portlet.defaultProps = {
  rounded: false,
  nonShadow: false,
  bordered: false,
  semiBordered: false,
  smallHead: false,
  dark: false,
  bg: '',
  children: null,
};

Portlet.Body = Body;
Portlet.Footer = Footer;
Portlet.Header = Header;
Portlet.HeaderCaption = HeaderCaption;
Portlet.Title = Title;
Portlet.Tools = Tools;
Portlet.ToolsItem = ToolsItem;

export { Portlet };
