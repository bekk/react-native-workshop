'use strict';

import { imgurURL } from '../config/config';

export const uploadImageToImgur = (image) => {
  const config = {
    method: 'POST',
    body: image,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : 'Client-ID 7362bd404ecd0c1'
    },
    mode: 'cors',
    cache: 'default'
  };

  return fetch(imgurURL, config)
    .then(parseJSON)
    .then(json => json.data.link);
};

const parseJSON = (response) => response.json();
