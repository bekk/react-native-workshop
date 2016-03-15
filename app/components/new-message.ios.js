'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import Textarea from './textarea';

import { postMessage, setNewMessageText, setUsername } from '../actions/actions';

class StartPage extends Component {
    render() {
        const { username, message, setNewMessage, setUsername, postMessage, navigator } = this.props;
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
                  multiline
                  placeholder="Message"
                  value={message}
                  onChangeText={setNewMessage} />
                  <TouchableOpacity
                    style={styles.sendButton}
                    onPress={this._onSend.bind(this)}>
                      <Text>Send</Text>
                  </TouchableOpacity>
            </View>
        );
    }

    _onSend() {
      this.props.postMessage();
      this.props.navigator.pop();
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
    sendButton: {
      alignSelf: 'flex-end',
      margin: 10
    }
});

const mapStateToProps = ({ username, message}) => ({ username, message });
const mapDispatchToProps = (dispatch) => ({
    postMessage: () => dispatch(postMessage()),
    setNewMessage: (message) => dispatch(setNewMessageText(message)),
    setUsername: (name) => dispatch(setUsername(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
