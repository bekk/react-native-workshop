'use strict';
import React, { TouchableOpacity } from 'react-native';
import { newMessage } from './routes';
import { connect } from 'react-redux';
import { postMessage } from '../../actions/actions';
import { MKButton, MKColor, MKSpinner } from 'react-native-material-kit';
import ConnectedSendButton from './spinning-send-button';

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
    color: '#ffffff'
  },
  sendButton: {
    padding: 15,
    top: -3
  }
};

const navigationBarButtons = () => ({

  RightButton (route) {
    if (route.title === newMessage.title) {
      return (
        <TouchableOpacity style={styles.navBarRightButton}>
          <ConnectedSendButton style={styles.sendButton} />
        </TouchableOpacity>
      );
    }
    return null;
  }
});

export default navigationBarButtons;
