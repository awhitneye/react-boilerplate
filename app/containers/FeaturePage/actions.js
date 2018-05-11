/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

/**
 * Load the strings, this action starts the request saga
 */
export function loadingStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

/**
 * Dispatched when the messages are loaded by the request saga
 */
export function stringsLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

/**
 * Dispatched when loading the messages fails
 */
export function stringsLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}

