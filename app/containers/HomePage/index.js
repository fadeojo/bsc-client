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
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import messages from './messages';

// eslint-disable-next-line
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          /* Rectangle: */
          backgroundImage:
            'radial-gradient(-3% 82%, #07D5D4 0%, #06C9C8 28%, #06C8C7 31%, #03ABA9 100%)',
          height: 400,
        }}
      >
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Button>Default</Button>
      </div>
    );
  }
}
