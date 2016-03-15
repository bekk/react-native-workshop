'use strict';
import React, {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

import BackArrow from './../../resources/back-arrow.png';
import NewMessage from '../new-message';

var styles = StyleSheet.create({
    navBarText: {
        fontSize: 16,
        marginVertical: 10
    },
    navBarTitleText: {
        color: '#ffffff',
        fontWeight: '500'
    },
    navBarLeftButton: {
        paddingLeft: 0
    },
    navBarLeftImage: {
        width: 50,
        height: 50
    },
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

const NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }

        const previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Image source={BackArrow} style={styles.navBarLeftImage}/>
            </TouchableOpacity>
        );
    },

    RightButton: function (route, navigator, index, navState) {
        if(route && route.title === 'Meldinger') {
          return (
            <TouchableOpacity
              style={styles.navBarRightButton}
              onPress={() => navigator.push({component: NewMessage, title: 'Skriv ny'})}>
                <Text style={styles.navBarRightText}>+</Text>
            </TouchableOpacity>
          );
        }
        return null;
    },

    Title: function (route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>
        );
    }
};


export default NavigationBarRouteMapper;
