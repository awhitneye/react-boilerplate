/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  POST_REQUEST,
  POST_ERROR,
  CHANGE_POST_MESSAGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  posting: false,
  error: false,
  currentPost: '',
});

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_POST_MESSAGE:
      return state
        .set('currentPost', action.text);
    case POST_REQUEST:
      return state
        .set('posting', true)
        .set('error', false);
    case POST_ERROR:
      return state
        .set('error', action.error)
        .set('posting', false)
        .set('currentPost', '');
    default:
      return state;
  }
}

export default messageReducer;
