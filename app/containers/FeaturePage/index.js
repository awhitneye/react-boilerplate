/**
 * MessageBoardPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import List from 'components/List';
import ListItem from 'components/ListItem';
import { makeSelectStrings, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadingStrings } from './actions';

export class FeaturePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.strings) {
      this.props.onLoadingPage();
    }
  }

  render() {
    const { loading, error, strings } = this.props;
    const setProps = {
      loading,
      error,
      strings,
    };

    return (
      <div>
        <List {...setProps} />
      </div>
    );
  }
}


FeaturePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  strings: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onLoadingPage: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadingPage: (e) => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(loadingStrings());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'featurePage', reducer });
const withSaga = injectSaga({ key: 'featurePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FeaturePage);
