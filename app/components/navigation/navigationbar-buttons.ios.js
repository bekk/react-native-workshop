'use strict';
import React, {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

import { Colors } from './../../config/design';
import { newMessage, listMessages } from './routes';
import { navigateTo } from '../../actions/actions';

var styles = StyleSheet.create({
    navBarRightButton: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        top: 5,
        right: 0,
        height: 50
    },
    navBarRightText: {
        color: Colors.Red,
        fontWeight: '300',
        fontSize: 36,
        padding: 15,
        top: -10
    }
});

const navigationBarButtons = (dispatch) => ({

    RightButton: function (route, navigator, index, navState) {
        if(route.title === listMessages.title) {
          return (
            <TouchableOpacity
              style={styles.navBarRightButton}
              onPress={() => dispatch(navigateTo(newMessage))}>
                <Text style={styles.navBarRightText}>+</Text>
            </TouchableOpacity>
          );
        }
        return null;
    }
});


export default navigationBarButtons;
