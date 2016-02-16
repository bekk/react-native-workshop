import React, {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux'
import { setMessage, setUsername, setView } from './actions';

const MessageInput = ({ message, username, onMessageChange, onUsernameChange, onChangeView }) => (
  <View style={styles.container}>
    <TextInput
      placeholder='brukernavn'
      onChangeText={onUsernameChange}
      value={username}
      />
    <TextInput
      placeholder='melding'
      onChangeText={onMessageChange}
      value={message}
      multiline
      />
    <TouchableHighlight onPress={() => onChangeView('screen2')}>
      <Text>Send</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onMessageChange: message => dispatch(setMessage(message)),
  onUsernameChange: username => dispatch(setUsername(username)),
  onChangeView: viewName => dispatch(setView(viewName))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
