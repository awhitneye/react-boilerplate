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
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import { changeString, postString } from './actions';
import { makeSelectCurrentInput, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { input, loading, error, strings, onSubmitForm, onChangeInput } = this.props;
    const stringsListProps = {
      loading,
      error,
      strings,
    };

    return (
      <div>
        <h3>
          <FormattedMessage {...messages.trymeMessage} />
        </h3>
        <Form>
          <Input
            id="username"
            type="text"
            placeholder="mxstbr"
            value={this.props.input}
            onChange={this.props.onChangeInput}
          />
          <Button onClick={onSubmitForm}>Post</Button>
        </Form>
      </div>
    );
  }
}

HomePage.propTypes = {
  input: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  strings: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  onChangeInput: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangePost: (e) => dispatch(changeString(e.target.value)),
    onSubmitForm: (e) => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(postString());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  input: makeSelectCurrentInput(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
