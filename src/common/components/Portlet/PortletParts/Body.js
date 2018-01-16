import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ scrollable, children }) => {
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

Body.defaultProps = {
  scrollable: false,
  children: null,
};

Body.propTypes = {
  scrollable: PropTypes.bool,
  children: PropTypes.node,
};

export default Body;
