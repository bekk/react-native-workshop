'use strict';

import { baseURL, messageUrl, imgurURL } from '../config/config'
import { uploadImageToImgur } from './imgur'

var network = {};

network.get = () => fetch(messageUrl).then(parseJSON)

network.post = (message, success, failed) => {
  return uploadImageToImgur()
    .then(url => postConfig({ message, url}))
    .then(postConfig => fetch(messageUrl, postConfig))
    .then(parseJSON);
};

const parseJSON = (response) => response.json();

const postConfig = json => ({
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(json),
  cache: 'default'
});

  // mode: 'cors',
export default network;
