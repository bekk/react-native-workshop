'use strict';
import React, { Component } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Colors, Fonts } from './../config/design';

class NewMessage extends Component {

  renderImage() {
    if (this.props.image !== undefined) {
      return(
        <View>
          <Image source={this.props.image.source} style={styles.media}/>
        </View>
      );
    }
  }

  sendMessage() {
    if (this.props.messageId) {
      this.props.putMessage();
    } else {
      this.props.postMessage();
    }
  }

  render() {
    const { username, newMessageText, setNewMessageText, setUsername, postMessage, error, image, onPickImagePressed, messageId } = this.props;
    const feedback = error ? <View style={styles.feedback}><Text style={styles.feedbackText}>{error}</Text></View> : null;

    // Hint React-Native uses Controlled Components https://facebook.github.io/react/docs/forms.html#controlled-components
    return (
      <View style={styles.container}>
        <View style={styles.data}>
          <TextInput
            style={styles.textinput}
            placeholder="Name"
            placeholderTextColor={Colors.Yellow}
            multiline={true}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Message"
            placeholderTextColor={Colors.Yellow}
            multiline={true}
            value={newMessageText}
            onChangeText={setNewMessageText}
          />
        </View>
        { feedback }
        {this.renderImage()}
        <View style={styles.actions}>
          <TouchableOpacity onPress={onPickImagePressed}>
            <Text style={styles.pickerButton}>Take Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sendMessage.bind(this)}>
            <Text style={styles.sendButton}>Send Message</Text>
          </TouchableOpacity>
        </View>
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
    marginTop : 10
  },
  sendButton : {
    flex : 0,
    backgroundColor: Colors.Red,
    color: Colors.White,
    padding: 5,
    marginTop: 5,
    textAlign: 'center'
  },
  pickerButton : {
    flex : 0,
    backgroundColor : Colors.Green,
    color : Colors.White,
    padding : 5,
    marginTop: 5,
    textAlign: 'center'
  },
  media : {
    flex : 0,
    height : 300,
    margin : 15
  }
});

// Redux related code
import { connect } from 'react-redux';
import { postMessage, putMessage, setNewMessageText, setUsername, openImagePicker, clearNewMessageState } from '../actions/actions';
const mapStateToProps = ({ username, newMessageText, error, image, messageId }) => ({username, newMessageText, error, image, messageId });
const mapDispatchToProps = (dispatch) => ({
  postMessage: () => dispatch(postMessage()),
  putMessage: () => dispatch(putMessage()),
  setNewMessageText: message => dispatch(setNewMessageText(message)),
  setUsername: name => dispatch(setUsername(name)),
  onPickImagePressed: () => dispatch(openImagePicker()),
  clearNewMessageState: () => dispatch(clearNewMessageState())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
