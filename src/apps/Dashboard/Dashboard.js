import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Redirect, NavLink } from 'react-router-dom';

import RouteWithSubRoutes from 'common/components/RouteWithSubRoutes';
import { UserActions } from 'apps/User/actions';
import { makeSelectUserProfileToJs } from 'apps/User/selectors';
import { routes } from './routes';
import Header from './Header';
import Footer from './Footer';

@connect(state => ({
  user: makeSelectUserProfileToJs(state),
}))
export default class Dashboard extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  logout = () => {
    this.props.dispatch(UserActions.logout());
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
          <button className="m-aside-left-close m-aside-left-close--skin-dark" id="m_aside_left_close_btn">
            <i className="la la-close" />
          </button>
          <div id="m_aside_left" className="m-grid__item m-aside-left m-aside-left--skin-dark ">
            <div id="m_ver_menu" className="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark">
              <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                <li className="m-menu__item  m-menu__item--active">
                  <a href="" className="m-menu__link ">
                    <i className="m-menu__link-icon flaticon-line-graph" />
                    <span className="m-menu__link-title">
                      <span className="m-menu__link-wrap">
                        <span className="m-menu__link-text">Dashboard</span>
                        <span className="m-menu__link-badge">
                          <span className="m-badge m-badge--danger">2</span>
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li className="m-menu__section">
                  <h4 className="m-menu__section-text">
                    Components
                  </h4>
                  <i className="m-menu__section-icon flaticon-more-v3" />
                </li>
                <li className="m-menu__item m-menu__item--submenu">
                  <a href="" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-layers" />
                    <span className="m-menu__link-text">Base</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent">
                        <a href="" className="m-menu__link ">
                          <span className="m-menu__link-text">Base</span>
                        </a>
                      </li>
                      <li className="m-menu__item">
                        <NavLink
                          to="/components/base/progress"
                          exact
                          activeClassName="m-menu__link-selected"
                          className="m-menu__link"
                        >
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot"><span /></i>
                          <span className="m-menu__link-text">Progress</span>
                        </NavLink>
                      </li>
                      <li className="m-menu__item">
                        <NavLink
                          to="/components/base/alerts"
                          exact
                          activeClassName="m-menu__link-selected"
                          className="m-menu__link"
                        >
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot"><span /></i>
                          <span className="m-menu__link-text">Alerts</span>
                        </NavLink>
                      </li>
                      <li className="m-menu__item">
                        <NavLink
                          to="/components/base/spinners"
                          exact
                          activeClassName="m-menu__link-selected"
                          className="m-menu__link"
                        >
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot"><span /></i>
                          <span className="m-menu__link-text">Spinner</span>
                        </NavLink>
                      </li>
                      <li className="m-menu__item">
                        <NavLink
                          to="/components/base/tabs"
                          exact
                          activeClassName="m-menu__link-selected"
                          className="m-menu__link"
                        >
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot"><span /></i>
                          <span className="m-menu__link-text">Tabs</span>
                        </NavLink>
                      </li>
                      <li className="m-menu__item">
                        <NavLink
                          to="/components/base/navs"
                          exact
                          activeClassName="m-menu__link-selected"
                          className="m-menu__link"
                        >
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot"><span /></i>
                          <span className="m-menu__link-text">Navs</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item m-menu__item--submenu m-menu__item--open">
                  <a href="" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-interface-1" />
                    <span className="m-menu__link-text">Portlets</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent">
                        <a href="" className="m-menu__link ">
                          <span className="m-menu__link-text">Portlets</span>
                        </a>
                      </li>
                      <li className="m-menu__item">
                        <NavLink
                          to="/components/portlets/base"
                          exact
                          className="m-menu__link"
                          activeClassName="m-menu__link-selected"
                        >
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot"><span /></i>
                          <span className="m-menu__link-text">Base Portlets</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-menu__item m-menu__item--submenu m-menu__item--open">
                  <a href="" className="m-menu__link m-menu__toggle">
                    <i className="m-menu__link-icon flaticon-multimedia-1" />
                    <span className="m-menu__link-text">Buttons</span>
                    <i className="m-menu__ver-arrow la la-angle-right" />
                  </a>
                  <div className="m-menu__submenu">
                    <span className="m-menu__arrow" />
                    <ul className="m-menu__subnav">
                      <li className="m-menu__item  m-menu__item--parent">
                        <a href="" className="m-menu__link ">
                          <span className="m-menu__link-text">Buttons</span>
                        </a>
                      </li>
                      <li className="m-menu__item m-menu__item--submenu m-menu__item--expanded m-menu__item--open">
                        <a href="" className="m-menu__link m-menu__toggle">
                          <i className="m-menu__link-bullet m-menu__link-bullet--dot"><span /></i>
                          <span className="m-menu__link-text">Button Base</span>
                          <i className="m-menu__ver-arrow la la-angle-right" />
                        </a>
                        <div className="m-menu__submenu">
                          <span className="m-menu__arrow" />
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item">
                              <NavLink
                                to="/components/buttons/default"
                                exact
                                className="m-menu__link"
                                activeClassName="m-menu__link-selected"
                              >
                                <i className="m-menu__link-bullet m-menu__link-bullet--dot"><span /></i>
                                <span className="m-menu__link-text">Default Style</span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-subheader ">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h3 className="m-subheader__title ">
                    Dashboard
                  </h3>
                </div>
              </div>
            </div>
            <div className="m-content">
              <div className="row">
                <div className="col-12">
                  <Switch>
                    {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
                    <Redirect from="*" to="/not-found" />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <div>
  //         <h1 style={{ display: 'inline-block' }}>Dashboard</h1>
  //         <button onClick={this.logout}>Logout</button>
  //       </div>
  //       <hr />
  //       <Switch>
  //         {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
  //         <Redirect from="*" to="/not-found" />
  //       </Switch>
  //     </div>
  //   );
  // }
}
