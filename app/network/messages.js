'use strict';

import { baseURL, messageUrl, imgurURL } from '../config/config'
import {uploadImageToImgur } from './imgur'

var network = {};

network.get = () => {
  console.log("--- Get ---");
  return fetch(baseURL + 'message').then(parseJSON)
};

network.post = (message, success, failed) => {
  uploadImageToImgur().then((url) => {
    const json = Object.assign({}, message, { url: url });
    const config = getPostMessageConfig(json);

    fetch(baseURL + 'message', config)
      .then(parseJSON)
      .then(json => {
        success(Object.assign({}, json, message));
      })
      .catch(error => {
        failed();
      });
  }).catch(error => {
    failed();
  })
}

network.postWithoutImage = (from, message) => {
  let config = postConfig({ from, message });
  return fetch(messageUrl, config).then(parseJSON);
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
