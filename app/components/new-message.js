'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { pickImage } from '././camera/camera';
import { setImage, openImagePicker } from '../actions/actions';

import { postMessage, setNewMessageText, setUsername } from '../actions/actions';

class NewMessage extends Component {
    render() {
        const { username, newMessageText, setNewMessageText, setUsername, postMessage, error, image, onPickImagePressed } = this.props;
        const sendButton = Platform.OS === 'android' ? null : this._renderSendButton();
        const feedback = error ? <View style={styles.feedback}><Text>{error}</Text></View> : null;
        const maybeImage = image ? <Image source={image.source} style={styles.image}/> : null;

        return (
            <View style={styles.container}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  value={username}
                  onChangeText={setUsername}
                  />
                <TextInput
                  style={styles.input}
                  placeholder="Message"
                  value={newMessageText}
                  onChangeText={setNewMessageText} />
                  { feedback }
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.takePictureButton}
                      onPress={onPickImagePressed}>
                        <Text>Take Picture</Text>
                    </TouchableOpacity>
                    { sendButton }
                  </View>
                  <View style={styles.imageContainer}>
                    { maybeImage }
                  </View>
            </View>
        );
    }

    _renderSendButton() {
      return (
        <TouchableOpacity
          style={styles.sendButton}
          onPress={this.props.postMessage}>
            <Text>Send</Text>
        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 100
    },
    input: {
      height: 30,
      margin: 10,
      padding: 5,
      borderWidth: 1,
      borderBottomColor: 'gray'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      marginTop: 10
    },
    feedback: {
      padding: 5,
      margin: 10,
      backgroundColor: '#F8BBD0',
      borderColor: '#F48FB1',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 2
    },
    sendButton: {
    },
    takePictureButton: {
      marginHorizontal: 10
    },
    image: {
      resizeMode: Platform.OS === 'android' ? 'cover' : 'contain',
      flex: 1
    },
    imageContainer: {
      flex: 1,
      paddingTop: 50
    }
});

const mapStateToProps = ({ username, newMessageText, error, image }) => ({ username, newMessageText, error, image });
const mapDispatchToProps = (dispatch) => ({
    postMessage: () => dispatch(postMessage()),
    setNewMessageText: message => dispatch(setNewMessageText(message)),
    setUsername: name => dispatch(setUsername(name)),
    onPickImagePressed: () => dispatch(openImagePicker()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
