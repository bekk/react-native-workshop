'use strict';

import messages from '../network/messages'

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_NEW_MESSAGE_TEXT = 'SET_NEW_MESSAGE_TEXT';
export const SET_VIEW = 'SET_VIEW';
export const SET_MESSAGES = 'SET_MESSAGES';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const FETCH_MESSAGE_FAILED = 'FETCH_MESSAGE_FAILED';
export const POST_MESSAGE = 'POST_MESSAGE';
export const SET_POST_SUCCESS = 'SET_POST_SUCCESS';
export const FEILMELDING = 'FEILMELDING';

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
  let { username, newMessageText, image } = getState();

  if (!username || username.length === 0) {
    dispatch({type: FEILMELDING, error: 'Du må fylle ut brukernavn.'});
  } else if (!newMessageText || newMessageText.length === 0) {
    dispatch({type: FEILMELDING, error: 'Du må skrive en melding'});
  } else {
    dispatch({type: POST_MESSAGE});
    return messages.post(username, newMessageText, image)
        .then(message => dispatch(setPostSuccess(message)))
        .then(() => navigator.pop())
        .catch(error => dispatch({type: FEILMELDING, error: 'Noe gikk feil ved innsending.'}));
  }
};
