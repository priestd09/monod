import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Sync from '../presenter';
import config from '../../../config';

// see: https://github.com/mochajs/mocha/issues/1847
const { describe, it } = global;


describe('<Sync />', () => {
  it('renders an element', () => {
    const wrapper = shallow(
      <Sync offline={false} />
    );
    expect(wrapper.find('.sync')).to.have.length(1);
  });

  it('has an online status', () => {
    const wrapper = shallow(
      <Sync offline={false} />
    );
    expect(wrapper.html()).to.contain(config.SYNC_ONLINE_MESSAGE);
  });

  it('has an offline status', () => {
    const wrapper = shallow(
      <Sync offline />
    );

    expect(wrapper.html()).to.contain(config.SYNC_OFFLINE_MESSAGE);
  });
});
