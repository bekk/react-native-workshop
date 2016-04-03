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
import { Colors, Fonts } from './../config/design';
import { connect } from 'react-redux';
import { pickImage } from './camera/camera';
import { openImagePicker, clearImage } from '../actions/actions';

class NewMessage extends Component {

    componentWillUnmount() {
        this.props.clearImage();
    }

    render() {
        const { username, newMessageText, setNewMessageText, setUsername, postMessage, error, image, onPickImagePressed } = this.props;
        const sendButton = Platform.OS === 'android' ? null : this._renderSendButton();
        const feedback = error ? <View style={styles.feedback}><Text style={styles.feedbackText}>{error}</Text></View> : null;
        const maybeImage = image ? <Image source={image.source} style={styles.image}/> : null;

        return (
            <View style={styles.container}>
                <View style={styles.inputElements} >
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Navn"
                      placeholderTextColor={Colors.Dark1}
                      underlineColorAndroid={Colors.White}
                      value={username}
                      onChangeText={setUsername}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Melding"
                      placeholderTextColor={Colors.Dark1}
                      underlineColorAndroid={Colors.White}
                      value={newMessageText}
                      onChangeText={setNewMessageText}
                    />
                  </View>
                </View>

                { feedback }
                <TouchableOpacity
                  style={[styles.button, { marginBottom: 8, backgroundColor: Colors.Green }]}
                  onPress={onPickImagePressed}>
                    <Text style={styles.buttonText} >Take Picture</Text>
                </TouchableOpacity>
                { sendButton }
                <View style={styles.imageContainer}>
                  { maybeImage }
                </View>
            </View>
        );
    }

    _renderSendButton() {
      return (
        <TouchableOpacity
          style={[styles.button, {backgroundColor: Colors.Red}]}
          onPress={this.props.postMessage}>
            <Text style={styles.buttonText}>SEND</Text>
        </TouchableOpacity>
      );
    }
}

function inputContainerStyle() {
    const base = {
        margin: 10,
        padding: 5
    };
    const ios = {
        height: 35,
        borderBottomWidth: 1,
        borderBottomColor: Colors.White
    };

    return Platform.OS === 'android' ? base : {...base, ...ios};
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 60
    },
    inputElements: {
      backgroundColor: Colors.Dark,
      paddingTop: Platform.OS === 'android' ? 0 : 20,
      paddingBottom: Platform.OS === 'android' ? 0 : 20,
      marginBottom: 8
    },
    inputContainer: inputContainerStyle(),
    input: {
      flex: 1,
      color: Colors.White,
      fontFamily: Fonts.Light
    },
    feedback: {
        paddingLeft: 10,
        marginTop: -2,
        marginBottom: 8
    },
    feedbackText: {
        color: Colors.Red,
        fontFamily: Fonts.Demi
    },
    button: {
      padding: 10,
      alignItems: 'center'
    },
    buttonText: {
      color: Colors.White,
      fontFamily: Fonts.Light
    },
    image: {
      resizeMode: Platform.OS === 'android' ? 'cover' : 'contain',
      flex: 1
    },
    imageContainer: {
      flex: 1,
      paddingTop: 20
    }
});

// Redux related code
import { connect } from 'react-redux';
import { postMessage, setNewMessageText, setUsername, openImagePicker, clearNewMessageState } from '../actions/actions';
const mapStateToProps = ({ username, newMessageText, error, image }) => ({username, newMessageText, error, image});
const mapDispatchToProps = (dispatch) => ({
    postMessage: () => dispatch(postMessage()),
    setNewMessageText: message => dispatch(setNewMessageText(message)),
    setUsername: name => dispatch(setUsername(name)),
    onPickImagePressed: () => dispatch(openImagePicker()),
    clearImage: () => dispatch(clearImage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
