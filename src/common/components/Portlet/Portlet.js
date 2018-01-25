import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import HeaderCaption from './HeaderCaption';
import Title from './Title';
import HeaderTools from './HeaderTools';
import ToolsItem from './ToolsItem';


const Portlet = ({ bgColor, bordered, children, dark, headerColor, nonShadow, rounded, semiBordered,
  smallHead, tabbed, ...other }) => {
  const portletClass = classNames(
    { 'm-portlet': true },
    { 'm-portlet--rounded': rounded },
    { 'm-portlet--unair': nonShadow },
    { 'm-portlet--bordered': bordered || semiBordered },
    { 'm-portlet--bordered-semi': semiBordered || dark || bgColor },
    { 'm-portlet--head-sm': smallHead },
    { 'm-portlet--tabs': tabbed },
    { 'm-portlet--skin-dark': dark || bgColor },
    { 'm-portlet--head-solid-bg': headerColor },
    { [`m--bg-${bgColor}`]: bgColor },
    { [`m-portlet--${headerColor}`]: headerColor },

  );
  return (
    <div className={portletClass} {...other}>
      {children}
    </div>
  );
};

Portlet.propTypes = {
  bgColor: PropTypes.string,
  bordered: PropTypes.bool,
  children: PropTypes.node,
  dark: PropTypes.bool,
  headerColor: PropTypes.string,
  nonShadow: PropTypes.bool,
  rounded: PropTypes.bool,
  semiBordered: PropTypes.bool,
  smallHead: PropTypes.bool,
  tabbed: PropTypes.bool,
};

Portlet.defaultProps = {
  bgColor: '',
  bordered: false,
  children: null,
  dark: false,
  headerColor: '',
  nonShadow: false,
  rounded: false,
  semiBordered: false,
  smallHead: false,
  tabbed: false,
};

Portlet.Body = Body;
Portlet.Footer = Footer;
Portlet.Header = Header;
Portlet.HeaderCaption = HeaderCaption;
Portlet.Title = Title;
Portlet.HeaderTools = HeaderTools;
Portlet.ToolsItem = ToolsItem;

export { Portlet };
