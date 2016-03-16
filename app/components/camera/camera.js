import { ImagePickerManager } from 'NativeModules';
import { Platform } from 'react-native';

var options = {
  title: 'Select Avatar', // specify null or empty string to remove the title
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  maxWidth: 1080, // photos only
  maxHeight: 1080, // photos only
  aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 1, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: false, // Built in functionality to resize/reposition the image after selection
  noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};



/**
* The first arg will be the options object for customization, the second is
* your callback which sends object: response.
*
* response.didCancel will inform you if the user cancelled the process
* response.error will contain an error message, if there is one
* response.data is the base64 encoded image data (photos only)
* response.uri is the uri to the local file asset on the device (photo or video)
* response.isVertical will be true if the image is vertically oriented
* response.width & response.height give you the image dimensions
*/

export const pickImage = () => new Promise((resolve, reject) => {
  ImagePickerManager.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      const error = new Error();
      error.message = 'User cancelled image picker';
      error.response = response;
      reject(error);
    }
    else if (response.error) {
      const error = new Error();
      error.message = 'ImagePickerManager Error';
      error.response = response;
      reject(error);
    }
    else {
      const uri = Platform.OS === 'android' ? response.uri : response.uri.replace('file://', '');
      const source = { uri, isStatic: true };
      const image = {
        source,
        data: response.data
      }
      resolve(image);
    }
  });
});
