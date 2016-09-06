'use strict';
import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Colors, Fonts } from './../config/design';

class NewMessage extends Component {

  setUsername(text) {
    this.props.setUsername(text);
  }

  setNewMessageText(text) {
    this.props.setNewMessageText(text);
  }

  postMessage() {
    this.props.postMessage();
  }

  render() {
    const { username, newMessageText, setNewMessageText, setUsername, postMessage, error, image, onPickImagePressed } = this.props;
    const feedback = error ? <View style={styles.feedback}><Text style={styles.feedbackText}>{error}</Text></View> : null;

    // Hint React-Native uses Controlled Components https://facebook.github.io/react/docs/forms.html#controlled-components
    return (
      <View style={styles.container}>
        <View style={styles.data}>
          <InputField placeholder="Name" onChangeText={(text) => this.setUsername(text)}/>
          <InputField placeholder="Message" onChangeText={(text) => this.setNewMessageText(text)}/>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={this.postMessage.bind(this)}>
            <Text style={styles.button}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class InputField extends Component {
  render() {
    return(
      <TextInput
        style={styles.textinput}
        placeholder={this.props.placeholder}
        placeholderTextColor={Colors.Yellow}
        multiline={true}
        numberOfLines={1}
        onChangeText={this.props.onChangeText}
      />
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
    flex: 0,
    padding: 20,
    marginTop: 60
  },
  textinput: {
    height: 35,
    color: Colors.White,
    borderBottomColor: Colors.White,
    borderBottomWidth: 1
  },
  data : {
    flex: 0,
    backgroundColor: Colors.Dark,
    padding: 10
  },
  actions : {
    flex : 0,
    padding: 10
  },
  button : {
    flex : 0,
    backgroundColor: Colors.Red,
    color: Colors.White,
    padding: 5,
    textAlign: 'center'
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
