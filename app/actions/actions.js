'use strict';

import messages from '../network/messages';
import { pickImage } from '../components/camera/camera';

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_NEW_MESSAGE_TEXT = 'SET_NEW_MESSAGE_TEXT';
export const SET_VIEW = 'SET_VIEW';
export const SET_MESSAGES = 'SET_MESSAGES';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const FETCH_MESSAGE_FAILED = 'FETCH_MESSAGE_FAILED';
export const POST_MESSAGE = 'POST_MESSAGE';
export const SET_POST_SUCCESS = 'SET_POST_SUCCESS';
export const FEILMELDING = 'FEILMELDING';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_NAVIGATOR = 'SET_NAVIGATOR';
export const NAVIGATOR_PUSH = 'NAVIGATOR_PUSH';
export const NAVIGATOR_POP = 'NAVIGATOR_POP';

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

export const postMessage = () => (dispatch, getState) => {
  let { username, newMessageText, image } = getState();

  if (!username || username.length === 0) {
    dispatch({type: FEILMELDING, error: 'Du må fylle ut brukernavn.'});
  } else if (!newMessageText || newMessageText.length === 0) {
    dispatch({type: FEILMELDING, error: 'Du må skrive en melding'});
  } else {
    dispatch({type: POST_MESSAGE});
    const imageData = image ? image.data : null;
    return messages.post(username, newMessageText, imageData)
        .then(message => dispatch(setPostSuccess(message)))
        .then(() => dispatch(navigatorPop()))
        .catch(error => dispatch({type: FEILMELDING, error: 'Noe gikk feil ved innsending.'}));
  }
};

export const setImage = (image) => ({ type: SET_IMAGE, image });

export const openImagePicker = () => (dispatch) => {
  return pickImage()
    .then(image => dispatch(setImage(image)))
    .catch((error) => console.log(error));
};

export const setNavigator = (navigator) => ({ type: SET_NAVIGATOR, navigator });
export const navigateTo = (route) => ({ type: NAVIGATOR_PUSH, route });
export const navigatorPop = () => ({ type: NAVIGATOR_POP });
