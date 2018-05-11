import { createSelector } from 'reselect';

const makeHomePage = (state) => state.get('homePage');

const makeSelectLoading = () => createSelector(
  makeHomePage,
  (homeState) => homeState.get('loading')
);

const makeSelectCurrentInput = () => createSelector(
  makeHomePage,
  (homeState) => homeState.get('input')
);

const makeSelectError = () => createSelector(
  makeHomePage,
  (homeState) => homeState.get('error')
);


export {
  makeHomePage,
  makeSelectLoading,
  makeSelectCurrentInput,
  makeSelectError,
};
