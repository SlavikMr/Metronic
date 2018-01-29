import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav as StrapNav } from 'reactstrap';

class Nav extends React.Component {
  constructor() {
    super();

    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren(props) {
    return React.Children.map(props.children, (child) => {
      if (child.type.name === 'NavItem') {
        return React.cloneElement(child, {
          lineType: true,
          children: this.renderChildren(child.props),
        });
      } else if (child.type.name === 'NavLink') {
        return React.cloneElement(child, {
          lineType: true,
        });
      }
      return child;
    });
  }

  render() {
    const { alignRight, color, children, className, lineType, tabsColor, ...other } = this.props;
    const navClass = classNames({
      'm-tabs': true,
      'm-tabs-line': lineType || lineType === 'normal',
      'm-tabs-line--2x': lineType === 'bold',
      'm-tabs-line--right': alignRight,
      [`nav-pills--${color}`]: color,
      [`m-tabs-line--${tabsColor}`]: tabsColor,
      [`${className}`]: className,
    });

    return (
      <StrapNav className={navClass} {...other} >
        {lineType ? this.renderChildren(this.props) : children}
      </StrapNav>
    );
  }
}

Nav.propTypes = {
  alignRight: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  lineType: PropTypes.string,
  tabsColor: PropTypes.string,
};

Nav.defaultProps = {
  alignRight: false,
  color: '',
  children: null,
  className: '',
  lineType: '',
  tabsColor: '',
};

export { Nav };
