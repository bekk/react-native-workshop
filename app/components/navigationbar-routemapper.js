'use strict';
import React, {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { MKButton, MKColor } from 'react-native-material-kit';

import BackArrow from './../resources/back-arrow.png';

const SendButton = MKButton.flatButton()
    .withText('Send')
    .withBackgroundColor(MKColor.Transparent)
    .withMaskColor(MKColor.Transparent)
    .withRippleColor('rgba(255, 255, 255, 0.2)')
    .withTextStyle({ color: 'white' })
    .build();


var styles = StyleSheet.create({
    navBarText: {
        fontSize: 16,
        marginVertical: 10
    },
    navBarTitleText: {
        color: '#ffffff',
        fontWeight: '500',
        marginVertical: 20
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
        top: 0,
        right: 0,
        height: 50
    },
    navBarRightText: {
        top: -3,
        color: '#ffffff'
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
        if (route && route.title === 'Skriv ny') {
            return (
                <TouchableOpacity style={styles.navBarRightButton}>
                    <SendButton style={{padding: 15, top: -3}}/>
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