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

network.put = (from, message, image, id) => {
  if (image) {
    return uploadImageToImgur(image)
      .then(url => {
        return {
          id : id,
          config : putConfig({ from, message, image : url })
        }
      })
      .then(put);
  }
  return put({ id : id, config : putConfig({ from, message })});
}

const post = (postConfig) => fetch(messageUrl, postConfig).then(parseJSON);
const put = (data) => fetch(messageUrl + '/' + data.id, data.config).then(parseJSON);

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

const putConfig = json => ({
  method: 'PUT',
  headers: {
    'Accept': APPLICATION_JSON,
    'Content-Type': APPLICATION_JSON
  },
  body: JSON.stringify(json),
  cache: 'default'
});


export default network;
