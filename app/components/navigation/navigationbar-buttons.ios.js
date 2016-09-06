'use strict';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
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
    height: 50,
  },
  navBarRightButtonText : {
    color : Colors.White,
    padding: 10,
    fontWeight: '200',
    fontSize: 20
  }
});

const navigationBarButtons = (dispatch) => ({
  RightButton: function (route) {
    // Hint dispatch navigateTo(newMessage)) to change the route (and use the styles above for layout)
    if (route === newMessageRoute) {
      return <View/>
    }

    return (
      <View>
        <TouchableOpacity
          style={styles.navRightButton}
          onPress={() => dispatch(navigateTo(newMessageRoute)) }
          >
          <Text style={styles.navBarRightButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
});


export default navigationBarButtons;
