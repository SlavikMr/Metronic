import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ scrollable, maxHeight, children }) => {
  const styles = {
    overflow: 'auto',
    maxHeight: !Number.isNaN(Number(maxHeight)) ? Number(maxHeight) : maxHeight,
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
  scrollable: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.node,
};

Body.defaultProps = {
  scrollable: false,
  children: null,
  maxHeight: 200,
};

export default Body;
