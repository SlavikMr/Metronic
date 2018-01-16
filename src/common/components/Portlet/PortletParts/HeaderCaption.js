import React from 'react';
import PropTypes from 'prop-types';
import { HeaderIcon } from './HeaderIcon';
import Title from './Title';

const HeaderCaption = ({ title = '', subtitle = '', icon }) => (
  <div className="m-portlet__head-caption">
    <div className="m-portlet__head-title">
      { icon && <HeaderIcon icon={icon} /> }
      <Title title={title} subtitle={subtitle} />
    </div>
  </div>
);

HeaderCaption.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default HeaderCaption;
