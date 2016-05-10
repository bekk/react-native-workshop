'use strict';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from './../../config/design';
import { newMessageRoute, messageListRoute } from './routes';
import { navigateTo } from '../../actions/actions';

var styles = StyleSheet.create({
  navBarRightButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    top: 5,
    right: 0,
    height: 50
  }
});

const navigationBarButtons = (dispatch) => ({

  RightButton: function (route) {
    // Hint dispatch navigateTo(newMessage)) to change the route (and use the styles above for layout)
    return null;
  }
});


export default navigationBarButtons;
