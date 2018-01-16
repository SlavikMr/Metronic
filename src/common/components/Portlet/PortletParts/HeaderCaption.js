import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Title from './Title';

const HeaderCaption = ({ title, subtitle, icon, children }) => {
  const Icon = icon;
  return (
    <div className="m-portlet__head-caption">
      <div className="m-portlet__head-title">
        { icon && <Icon /> }
        <Title title={title} subtitle={subtitle} />
      </div>
    </div>
  );
};

HeaderCaption.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
};

export default HeaderCaption;
