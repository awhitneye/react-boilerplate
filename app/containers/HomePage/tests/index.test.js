import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import List from 'components/List';
import { HomePage, mapDispatchToProps } from '../index';
import { changeString } from '../actions';
import messages from '../messages';

describe('<HomePage />', () => {
  describe('mapDispatchToProps', () => {
    describe('onChangeInput', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeInput).toBeDefined();
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });
    });
  });
});
