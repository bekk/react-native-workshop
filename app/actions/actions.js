'use strict';

import messages from '../network/messages'

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_NEW_MESSAGE_TEXT = 'SET_NEW_MESSAGE_TEXT';
export const SET_VIEW = 'SET_VIEW';
export const SET_MESSAGES = 'SET_MESSAGES';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const FETCH_MESSAGE_FAILED = 'FETCH_MESSAGE_FAILED';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_MESSAGE_FAILED = 'POST_MESSAGE_FAILED';
export const SET_POST_SUCCESS = 'SET_POST_SUCCESS';

export const setNewMessageText = newMessageText => ({ type: SET_NEW_MESSAGE_TEXT, newMessageText });
export const setUsername = username => ({ type: SET_USER_NAME, username });
const setMessages = messages => ({ type: SET_MESSAGES, messages });
const setFetchMessagesFailed = () => ({ type: FETCH_MESSAGE_FAILED });
const setPostSuccess = message => ({ type: SET_POST_SUCCESS, message });

export const fetchMessages = () => (dispatch) => {
  dispatch({ type: FETCH_MESSAGE });
  return messages.get()
    .then(json => dispatch(setMessages(json)))
    .catch(() => dispatch(setFetchMessagesFailed()));
};

export const postMessage = (navigator) => (dispatch, getState) => {
  dispatch({ type: POST_MESSAGE });
  let { username, newMessageText, image } = getState();
  return messages.post(username, newMessageText, image)
    .then(message => dispatch(setPostSuccess(message)))
    .then(() => navigator.pop())
    .catch(error => dispatch({ type: POST_MESSAGE_FAILED }));
};
