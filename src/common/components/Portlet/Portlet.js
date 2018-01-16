import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Header from './PortletParts/Header';
import Body from './PortletParts/Body';
import Footer from './PortletParts/Footer';
import Title from './PortletParts/Title';
import Tools from './PortletParts/Tools';
import HeaderCaption from './PortletParts/HeaderCaption';


const Portlet = ({
  rounded = false,
  nonShadow = false,
  bordered = false,
  semiBordered = false,
  smallHead = false,
  dark = false,
  bg,
  children,
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
  children: PropTypes.node,
  bg: PropTypes.string,
};

Portlet.Header = Header;
Portlet.Body = Body;
Portlet.Footer = Footer;
Portlet.Title = Title;
Portlet.HeaderCaption = HeaderCaption;
Portlet.Tools = Tools;

export default Portlet;
