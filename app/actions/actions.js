export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_VIEW = 'SET_VIEW';
export const SET_MESSAGES = 'SET_MESSAGES';

export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const FETCH_MESSAGE_FAILED = 'FETCH_MESSAGE_FAILED';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_MESSAGE_FAILED = 'POST_MESSAGE_FAILED';

export const setMessage = message => ({ type: SET_MESSAGE, message: message });
export const setUsername = username => ({ type: SET_USER_NAME, username });
export const setView = viewName => ({ type: SET_VIEW, viewName });

const setMessages = messages => ({ type: SET_MESSAGES, messages});
const setFetchMessages = () => ({type: FETCH_MESSAGE});
const setFetchMessagesFailed = () => ({type: FETCH_MESSAGE_FAILED});
const setPostingMessage = () => ({type: POST_MESSAGE});
const setPostMessageFailed = () => ({type: POST_MESSAGE_FAILED});

const parseJSON = (response) => response.json();
const getPostMessageConfig = json => {
  return {
    method: 'POST',
    body: JSON.stringify(json),
    mode: 'cors',
    cache: 'default'
  };
}

export const fetchMessages = (dispatch) => {
  fetch('http://mobile-course.herokuapp.com/message')
    .then(parseJSON)
    .then((json) => {
      console.log(json);
      dispatch(setMessages(json));
    })
    .catch((error) => {
      console.warn(error);
      dispatch(setFetchMessagesFailed());
    });

    return setFetchMessages();
}


export const postMessage = (dispatch, message) => {
  console.log('Message', message);
  uploadImageToImgur().then((url) => {
    console.log('postMessage');

    const json = Object.assign({}, message, { url: url });
    const config = getPostMessageConfig(json);

    fetch('http://mobile-course.herokuapp.com/message', config)
      .then(parseJSON)
      .then(json => {
        console.log('success post message', json, message);
        dispatch(setMessage(message));
      })
      .catch(error => {
        console.warn(error);
        dispatch(setPostMessageFailed());
      });
  }).catch(error => {
    console.warn(error);
  })

  return setPostingMessage();
}

const uploadImageToImgur = (image) => {
  return new Promise((resolve, reject) => {
    _uploadImageToImgur(resolve, reject, image);
  });
}

const _uploadImageToImgur = (resolve, reject, image) => {
  const config = {
    method: 'POST',
    body: image,
    headers: {
      'Authorization' : 'Client-ID 7362bd404ecd0c1'
    },
    mode: 'cors',
    cache: 'default'
  };

  fetch('https://api.imgur.com/3/image', config)
    .then(parseJSON)
    .then(json => {
      resolve('http://imgur.com/' + json.data.id);
    })
    .catch(error => {
      reject();
    });
}
