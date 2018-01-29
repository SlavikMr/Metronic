import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Section = ({ children }) => (
  <div className="m-section m-section--last">{children}</div>
);

export const SectionContent = ({ subTitle, heading, children }) => (
  <React.Fragment>
    { heading &&
      <h3 className="m-section__heading">{heading}</h3>
    }
    <span className="m-section__sub">{subTitle}</span>
    <div className="m-section__content">
      {children}
    </div>
  </React.Fragment>
);

export const Demo = ({ btn, children }) => {
  const cls = classNames('m-demo__preview',
    { 'm-demo__preview--btn': btn },
  );

  return (
    <div className="m-demo">
      <div className={cls}>
        {children}
      </div>
    </div>
  );
};

Demo.propTypes = {
  btn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Demo.defaultProps = {
  btn: false,
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

SectionContent.propTypes = {
  subTitle: PropTypes.node,
  children: PropTypes.node.isRequired,
  heading: PropTypes.element,
};

SectionContent.defaultProps = {
  subTitle: '',
  heading: null,
};
