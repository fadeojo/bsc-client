/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import messages from './messages';
// import { WaterWave } from 'ant-design-pro/lib/Charts';
import './HomePage.scss';
import healthImage from '../../images/healthcare-sign.svg';

// eslint-disable-next-line
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home-component">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <img src={healthImage} alt="" />
            <Button type="primary" style={{ width: 225, height: 42 }}>
              <Link to="/login">
                <FormattedMessage {...messages.login} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  history: object.isRequired,
};
