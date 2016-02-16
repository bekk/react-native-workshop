export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_VIEW = 'SET_VIEW';
export const SET_MESSAGES = 'SET_MESSAGES';

export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const FETCH_MESSAGE_FAILED = 'FETCH_MESSAGE_FAILED';

export const setMessage = message => ({ type: SET_MESSAGE, message });
export const setUsername = username => ({ type: SET_USER_NAME, username });
export const setView = viewName => ({ type: SET_VIEW, viewName });
export const setMessages = messages => ({ type: SET_MESSAGES, messages});

const parseJSON = (response) => response.json();

export const fetchMessages = (dispatch) => {
  fetch('http://mobile-course.herokuapp.com/message')
    .then(parseJSON)
    .then((json) => {
      dispatch(setMessages(json));
    })
    .catch((error) => {
      console.warn(error);
    });

    return ({type: FETCH_MESSAGE});
}
