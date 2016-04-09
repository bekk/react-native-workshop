'use strict';

import { messageUrl } from '../config/config';
import { uploadImageToImgur } from './imgur';

const APPLICATION_JSON = 'application/json';

let network = {};

network.get = () => fetch(messageUrl).then(parseJSON);

network.post = (from, message, image) => {
  if (image) {
    return uploadImageToImgur(image)
      .then(url => postConfig({ from, message, image: url }))
      .then(post);
  }
  return post(postConfig({ from, message }));
};

const post = (postConfig) => fetch(messageUrl, postConfig).then(parseJSON);

const parseJSON = response => response.json();

const postConfig = json => ({
  method: 'POST',
  headers: {
    'Accept': APPLICATION_JSON,
    'Content-Type': APPLICATION_JSON
  },
  body: JSON.stringify(json),
  cache: 'default'
});

export default network;
