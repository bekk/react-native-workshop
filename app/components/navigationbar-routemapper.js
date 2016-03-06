'use strict';
import React, {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import BackArrow from './../resources/back-arrow.png';

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
        paddingRight: 10
    },
    navBarButtonText: {
        color: '#ffffff'
    }
});

const NavigationBarRouteMapper = {
    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }

        const previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Image source={BackArrow} style={styles.navBarLeftImage} />
            </TouchableOpacity>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        return null;
    },

    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>
        );
    }
};

export default NavigationBarRouteMapper;