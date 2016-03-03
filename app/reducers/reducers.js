import {
  SET_USER_NAME,
  SET_MESSAGE,
  SET_VIEW,
  SET_MESSAGES,
  FETCH_MESSAGE,
  FETCH_MESSAGE_FAILED
} from '../actions/actions';

import initialState from './initial-state'

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
      return Object.assign({}, state, {
         messages: state.messages.push(action.message) || [action.message],
         isFetchingMessages: false,
         failedToFetchMessages: false
       });
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
