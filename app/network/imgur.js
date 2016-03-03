export const uploadImageToImgur = (image) => {
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

  fetch(imgurURL, config)
    .then(parseJSON)
    .then(json => {
      resolve('http://imgur.com/' + json.data.id);
    })
    .catch(error => {
      reject();
    });
}

const parseJSON = (response) => response.json();
