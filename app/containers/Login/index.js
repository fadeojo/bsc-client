/**
 *
 * Login
 *
 */

import React from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Input, Button } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loginAction } from './actions';

const { Item } = Form;

// eslint-disable-next-line react/prefer-stateless-function
export class Login extends React.PureComponent {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <FormattedMessage {...messages.header} />

        <Form onSubmit={this.onSubmit}>
          <Item>
            {getFieldDecorator('Email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(<Input placeholder="Email" type="email" />)}
          </Item>
          <Item>
            {getFieldDecorator('Password', {
              rules: [
                { required: true, message: 'Please input your password!' },
              ],
            })(<Input placeholder="Password" type="password" />)}
          </Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  form: object.isRequired,
  onLogin: func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (loginParams) => dispatch(loginAction(loginParams)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(withReducer, withSaga, withConnect)(
  Form.create()(Login)
);
