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
  }
};

const navigationBarButtons = (dispatch) => {
  const postMessage = () => dispatch(postMessageAction());

  return {
    RightButton (route) {
      // Hint: implement the send-button for android here (and use the styles above for layout)
      return null;
    }
  };
};

export default navigationBarButtons;
