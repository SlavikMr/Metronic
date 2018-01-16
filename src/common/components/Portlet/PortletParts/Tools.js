import React from 'react';
import PropTypes from 'prop-types';
import ToolsItem from './ToolsItem';

const Tools = ({ navLinks }) => {
  const linksList = navLinks.map(elm => <ToolsItem>{elm}</ToolsItem>);

  return (
    <div className="m-portlet__head-tools">
      <ul className="m-portlet__nav">
        {linksList}
      </ul>
    </div>
  );
};

Tools.propTypes = {
  navLinks: PropTypes.elements,
};

export default Tools;
