import React from 'react';
import PropTypes from 'prop-types';
import { HeaderIcon } from './HeaderIcon';
import Title from './Title';

const HeaderCaption = ({ title, subtitle, icon }) => (
  <div className="m-portlet__head-caption">
    <div className="m-portlet__head-title">
      { icon && <HeaderIcon icon={icon} /> }
      <Title title={title} subtitle={subtitle} />
    </div>
  </div>
);

HeaderCaption.defaultProps = {
  title: '',
  subtitle: '',
  icon: null,
};


HeaderCaption.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
};

export default HeaderCaption;
