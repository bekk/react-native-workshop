'use strict';

import { baseURL, messageUrl, imgurURL } from '../config/config'
import { uploadImageToImgur } from './imgur'

var network = {};

network.get = () => fetch(messageUrl).then(parseJSON)

network.post = (from, message, image) => {
  if (image) {
    return uploadImageToImgur(image)
      .then(url => postConfig({ from, message, url }))
      .then(post);
  }
  return post(postConfig({ from, message }));
};

const post = (postConfig) => fetch(messageUrl, postConfig).then(parseJSON);

const parseJSON = response => response.json();

const postConfig = json => ({
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(json),
  cache: 'default'
});

export default network;
