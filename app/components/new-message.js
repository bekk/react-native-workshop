'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { postMessage, setNewMessageText, setUsername } from '../actions/actions';

class NewMessage extends Component {
    render() {
        const { username, newMessageText, setNewMessageText, setUsername, postMessage, navigator, error } = this.props;
        const sendButton = Platform.OS === 'android' ? null : this._renderSendButton(() => postMessage(navigator));
        const feedback = error ? <View style={styles.feedback}><Text>{error}</Text></View> : null;
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
                  { sendButton }
            </View>
        );
    }

    _renderSendButton(postMessage) {
      return (
        <TouchableOpacity
          style={styles.sendButton}
          onPress={postMessage}>
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
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5
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
      alignSelf: 'flex-end',
      margin: 10
    }
});

const mapStateToProps = ({ username, newMessageText, error }) => ({ username, newMessageText, error });
const mapDispatchToProps = (dispatch) => ({
    postMessage: navigator => dispatch(postMessage(navigator)),
    setNewMessageText: message => dispatch(setNewMessageText(message)),
    setUsername: name => dispatch(setUsername(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
