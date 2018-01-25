import React from 'react';
import classNames from 'classnames';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
    this.toggle = this.toggle.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }


  toggle(e, tab) {
    e.preventDefault();
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  renderChildren() {
    let navLinkCounter = 0;
    const findingNav = props => (
      React.Children.map(props.children, (child) => {
        if (child.type.name === 'Nav') {
          return React.cloneElement(child, {
            children: findingNav(child.props),
          });
        } else if (child.type.name === 'NavItem') {
          return React.cloneElement(child, {
            children: findingNav(child.props),
          });
        } else if (child.type.name === 'NavLink') {
          navLinkCounter += 1;
          const tabIndex = navLinkCounter;
          return React.cloneElement(child, {
            className: classNames({ active: this.state.activeTab === tabIndex }),
            onClick: (e) => { this.toggle(e, tabIndex); },
          });
        } else if (child.type.name === 'TabContent') {
          return React.cloneElement(child, {
            activeTab: this.state.activeTab,
          });
        }
        return React.cloneElement(child, {
          children: findingNav(child.props),
        });
      })
    );
    return findingNav(this.props);
  }

  render() {
    return (
      <React.Fragment>
        { this.renderChildren() }
      </React.Fragment>
    );
  }
}

export { Tabs };
