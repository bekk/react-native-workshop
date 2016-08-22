'use strict';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { newMessageRoute } from './routes';
import { connect } from 'react-redux';
import { postMessage as postMessageAction } from '../../actions/actions';
import { MKButton, MKColor, MKSpinner } from 'react-native-material-kit';

const styles = {
  navBarRightButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    top: 0,
    right: 0,
    height: 50
  },
  navBarRightText: {
    top: -3,
    color: '#ffffff',
    marginRight: 20
  }
};

const navigationBarButtons = (dispatch) => {
  const postMessage = () => dispatch(postMessageAction());

  return {
    RightButton (route) {
      // Hint: implement the send-button for android here (and use the styles above for layout)
      if (route === newMessageRoute) {
        return (
          <TouchableOpacity style={styles.navBarRightButton} onPress={postMessage}>
            <Text style={styles.navBarRightText}>Send</Text>
          </TouchableOpacity>
        );
      }
      return <View />;
    }
  };
};

export default navigationBarButtons;
