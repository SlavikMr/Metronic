import React from 'react';
import PropTypes from 'prop-types';

const Body = ({
  scrollable = false,
  children
}) => {
  const styles = {
    overflow: 'auto',
    maxHeight: '200px',
    height: '200px',
  };
  return (
    <div className="m-portlet__body">
      {
        scrollable ? (
          <div style={styles} className="m-scrollable">
            {children}
          </div>
        ) : (children)
      }
    </div>
  );
};

Body.propTypes = {
  scrollable: PropTypes.bool.isRequired,
};

export default Body;
