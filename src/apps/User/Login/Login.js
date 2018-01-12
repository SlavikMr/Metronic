import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VBForm, connectForm } from 'vb-react-form';

import { replaceRoute } from 'apps/Router/actions';
import { WAIT_FOR_ACTION } from 'middlewares';
import Loader from 'common/components/Loader';
import BG1 from 'assets/metronic/media/app/img/bg/bg-1.jpg';
import Logo from 'assets/metronic/media/app/img/logos/logo-1.png';
import { UserActions } from '../actions';
import { makeSelectUserLoginToJs } from '../selectors';
import InputField from './InputField';
import { validators } from './validators';

const Actions = connectForm(({ form: { isValid }, ...other }) => (
  <button {...other} type="submit" disabled={!isValid}>Sign In</button>
));

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  onSubmit = (data) => {
    this.props.dispatch(UserActions.login.request(
      { email: data.email, password: data.password },
      WAIT_FOR_ACTION,
    )).then(() => {
      this.props.dispatch(replaceRoute('/'));
    });
  };

  render() {
    const { auth: { isLoading } } = this.props;
    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
        <div
          className="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--singin m-login--2 m-login-2--skin-1"
          id="m_login"
          style={{ backgroundImage: `url(${BG1})` }}
        >
          <div className="m-grid__item m-grid__item--fluid m-login__wrapper">
            <div className="m-login__container">
              <div className="m-login__logo">
                <a href="#">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>
              <div className="m-login__signin">
                <div className="m-login__head">
                  <h3 className="m-login__title">
                    Sign In To Admin
                  </h3>
                </div>
                <VBForm onSubmit={this.onSubmit} validator={validators} className="m-login__form m-form" noValidate>
                  <div className="form-group m-form__group">
                    <VBForm.Field
                      name="email"
                      component={InputField}
                      placeholder="Enter username"
                      className="form-control m-input"
                    />
                  </div>
                  <div className="form-group m-form__group">
                    <VBForm.Field
                      name="password"
                      type="password"
                      component={InputField}
                      placeholder="Enter username"
                      className="form-control m-input"
                    />
                  </div>
                  <div className="m-login__form-action">
                    <Actions
                      id="m_login_signin_submit"
                      className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primary"
                    />
                  </div>
                </VBForm>
              </div>
            </div>
          </div>
        </div>
        {isLoading && <Loader />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: makeSelectUserLoginToJs(state),
});

export default connect(mapStateToProps)(Login);
