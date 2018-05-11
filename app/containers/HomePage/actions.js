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
  POST_STRING,
  POST_ERROR,
  CHANGE_STRING,
} from './constants';

/**
 * Begin
 */
export function postString() {
  return {
    type: POST_STRING,
  };
}

/**
 * Dispatched on change
 */

export function changeString(text) {
  return {
    type: CHANGE_STRING,
    text,
  };
}

/**
 * Dispatched on error
 */
export function postError(error) {
  return {
    type: POST_ERROR,
    error,
  };
}

