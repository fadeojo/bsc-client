import React from 'react';
import renderer from 'react-test-renderer';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomePage from '../index';
import messages from '../messages';

configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  it('should render correctly', () => {
    const renderedComponent = renderer.create(
      <IntlProvider locale={'en'} key={'en'} messages={messages}>
        <HomePage />
      </IntlProvider>
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.login} />)
    ).toEqual(true);
  });
});
