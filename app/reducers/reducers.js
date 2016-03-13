'use strict';

import {
  SET_USER_NAME,
  SET_MESSAGE,
  SET_NEW_MESSAGE_TEXT,
  SET_VIEW,
  SET_MESSAGES,
  FETCH_MESSAGE,
  FETCH_MESSAGE_FAILED
} from '../actions/actions';

import { initialState } from './initial-state'

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return Object.assign({}, state, { username: action.username });

    case SET_MESSAGES:
      return Object.assign({}, state, {
        messages: action.messages,
        isFetchingMessages: false,
        failedToFetchMessages: false
      });

    case SET_MESSAGE:
      var messages = [...state.messages, action.message];
      return Object.assign({}, state, {
         messages,
         isFetchingMessages: false,
         failedToFetchMessages: false
       });

    case SET_NEW_MESSAGE_TEXT:
      return Object.assign({}, state, { newMessageText: action.newMessageText });

    case SET_VIEW:
      return Object.assign({}, state, { viewName: action.viewName })

    case FETCH_MESSAGE:
      return Object.assign({}, state, {
        isFetchingMessages: true,
        failedToFetchMessages: false
      });

    case FETCH_MESSAGE_FAILED:
      return Object.assign({}, state, {
        isFetchingMessages: false,
        failedToFetchMessages: true
      });

    default:
      return state;
  }
}

export default messageReducer;
