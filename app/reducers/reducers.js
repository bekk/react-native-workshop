'use strict';

import {
  SET_USER_NAME,
  SET_NEW_MESSAGE_TEXT,
  SET_VIEW,
  SET_MESSAGES,
  FETCH_MESSAGE,
  FETCH_MESSAGE_FAILED,
  SET_POST_SUCCESS,
  SET_IMAGE,
  SET_NAVIGATOR,
  NAVIGATOR_PUSH,
  NAVIGATOR_POP,
  FEILMELDING,
  POST_MESSAGE,
  PUT_MESSAGE,
  SELECT_MESSAGE
} from '../actions/actions';

import { initialState } from './initial-state';

function messageReducer(state = initialState, action) {
  switch (action.type) {

    case SELECT_MESSAGE:
      const tmp = Object.assign({}, state, {
        username : action.message.from,
        newMessageText : action.message.message,
        messageId : action.message._id
      });
      tmp.navigator.push(action.route);
      return tmp;

    case SET_USER_NAME:
      return Object.assign({}, state, { username: action.username });

    case SET_MESSAGES:
      return Object.assign({}, state, {
        messages: action.messages,
        isFetchingMessages: false,
        failedToFetchMessages: false
      });

    case SET_NEW_MESSAGE_TEXT:
      return Object.assign({}, state, { newMessageText: action.newMessageText });

    case SET_VIEW:
      return Object.assign({}, state, { viewName: action.viewName });

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

    case SET_POST_SUCCESS:
      var messages = [...state.messages, action.message];
      return Object.assign({}, state, {
        messages,
        username: null,
        newMessageText: null,
        messageId: null,
        isFetchingMessages: false,
        failedToFetchMessages: false,
        isSending: false
      });

    case FEILMELDING:
      return Object.assign({}, state, { error: action.error });

    case SET_IMAGE:
      return Object.assign({}, state, { image: action.image });

    case SET_NAVIGATOR:
      return Object.assign({}, state, { navigator: action.navigator });

    case NAVIGATOR_PUSH:
      state.navigator.push(action.route);
      return state;

    case NAVIGATOR_POP:
      state.navigator.pop();
      return state;

    case POST_MESSAGE:
      return Object.assign({}, state, {isSending: true});

    case PUT_MESSAGE:
      return Object.assign({}, state, {isSending: true});

    default:
      return state;
  }
}

export default messageReducer;
