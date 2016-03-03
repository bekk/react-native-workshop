'use strict';

import messages from '../network/messages'

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_VIEW = 'SET_VIEW';
export const SET_MESSAGES = 'SET_MESSAGES';

export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const FETCH_MESSAGE_FAILED = 'FETCH_MESSAGE_FAILED';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_MESSAGE_FAILED = 'POST_MESSAGE_FAILED';

export const setMessage = message => ({ type: SET_MESSAGE, message });
export const setUsername = username => ({ type: SET_USER_NAME, username });
export const setView = viewName => ({ type: SET_VIEW, viewName });

const setMessages = messages => ({ type: SET_MESSAGES, messages });
const setFetchMessages = () => ({ type: FETCH_MESSAGE });
const setFetchMessagesFailed = () => ({type: FETCH_MESSAGE_FAILED });
const setPostMessage = () => ({ type: POST_MESSAGE });
const setPostMessageFailed = () => ({ type: POST_MESSAGE_FAILED });


export const fetchMessages = (dispatch) => {
  messages.get(
    (json) => { dispatch(setMessages(json)) },
    () => { dispatch(setFetchMessagesFailed()) }
  );

  return setFetchMessages();
};


export const postMessage = (dispatch, message) => {
  messages.post(
    message,
    (json) => { dispatch(setMessage(Object.assign({}, json, message))); },
    () => { dispatch(setPostMessageFailed()); }
  );

  return setPostMessage();
}
