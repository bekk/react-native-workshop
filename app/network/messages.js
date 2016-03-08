'use strict';

import { baseURL, imgurURL } from '../config/config'
import {uploadImageToImgur } from './imgur'

var network = {};

network.get = (success, failed) => {
  console.log("--- Get ---");

  fetch(baseURL + 'message')
    .then(parseJSON)
    .then((json) => {
      console.log("--- Success ok ---");
      success(json)
    })
    .catch((error) => {
      console.log("--- Error ---");
      failed()
    });
}

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

const parseJSON = (response) => response.json();

const getPostMessageConfig = json => {
  return {
    method: 'POST',
    body: JSON.stringify(json),
    mode: 'cors',
    cache: 'default'
  };
}

export default network;
