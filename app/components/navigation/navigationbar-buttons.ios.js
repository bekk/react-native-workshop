'use strict';
import React, {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import NewMessage from '../new-message';

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
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 30,
        padding: 15,
        top: -10
    }
});

const NavigationBarButtons = {

    RightButton: function (route, navigator, index, navState) {
        if(route && route.title === 'Meldinger') {
          return (
            <TouchableOpacity
              style={styles.navBarRightButton}
              onPress={() => navigator.push({ component: NewMessage, title: 'Skriv ny' })}>
                <Text style={styles.navBarRightText}>+</Text>
            </TouchableOpacity>
          );
        }
        return null;
    }
};


export default NavigationBarButtons;
