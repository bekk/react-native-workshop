'use strict';
import React, { View, Component, TextInput, Text, Image,
  TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Colors, Fonts } from './../config/design';

class NewMessage extends Component {
  render() {
    const { username, newMessageText, setNewMessageText, setUsername, postMessage, error, image, onPickImagePressed } = this.props;
    const feedback = error ? <View style={styles.feedback}><Text style={styles.feedbackText}>{error}</Text></View> : null;

    // Hint React-Native uses Controlled Components https://facebook.github.io/react/docs/forms.html#controlled-components
    return (
      <View style={styles.container}>
        <Text>New Message View</Text>
      </View>
    );
  }
}

NewMessage.propTypes = {
  postMessage: React.PropTypes.func.isRequired,
  onPickImagePressed: React.PropTypes.func.isRequired,
  setNewMessageText: React.PropTypes.func.isRequired,
  newMessageText: React.PropTypes.string,
  setUsername: React.PropTypes.func.isRequired,
  username: React.PropTypes.string,
  error: React.PropTypes.string,
  image: React.PropTypes.shape({
    source: React.PropTypes.shape({
      uri: React.PropTypes.string.isRequired
    })
  })
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60
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
  clearNewMessageState: () => dispatch(clearNewMessageState())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
