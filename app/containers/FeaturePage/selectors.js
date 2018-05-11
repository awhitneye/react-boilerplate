import { createSelector } from 'reselect';

const makeFeaturePage = (state) => state.get('featurePage');

const makeSelectLoading = () => createSelector(
  makeFeaturePage,
  (pageState) => pageState.get('loading')
);

const makeSelectStrings = () => createSelector(
  makeFeaturePage,
  (pageState) => pageState.get('strings')
);

const makeSelectError = () => createSelector(
  makeFeaturePage,
  (pageState) => pageState.get('error')
);


export {
  makeFeaturePage,
  makeSelectLoading,
  makeSelectStrings,
  makeSelectError,
};
