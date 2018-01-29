import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MNav extends React.Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child) => {
      if (child.type.name === 'MNavItem') {
        return React.cloneElement(child, {
          inline: true,
        });
      }
      return child;
    });
  }

  render() {
    const { inline, children, className, ...other } = this.props;
    const navClass = classNames({
      'm-nav': true,
      'm-nav--inline': inline,
      [`${className}`]: className,
    });
    return (
      <ul className={navClass} {...other}>
        { inline ? this.renderChildren()
          : children }
      </ul>
    );
  }
}

MNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

MNav.defaultProps = {
  children: null,
  className: '',
  inline: false,
};

export { MNav };
