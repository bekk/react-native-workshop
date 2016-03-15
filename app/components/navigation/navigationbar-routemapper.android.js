'use strict';
import React, {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import { postMessage } from '../../actions/actions'

import { MKButton, MKColor } from 'react-native-material-kit';

import BackArrow from '../../resources/back-arrow.png';

const styles = StyleSheet.create({
    navBarTitleText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: '500',
        marginVertical: 14
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
                    <ConnectedSendButton navigator={navigator} style={{padding: 15, top: -3}}/>
                </TouchableOpacity>
            );
        }
        return null;
    },

    Title: function (route, navigator, index, navState) {
        return (
            <Text style={styles.navBarTitleText}>
                {route.title}
            </Text>
        );
    }
};


const FlatButton = MKButton.flatButton()
     .withText('Send')
     .withBackgroundColor(MKColor.Transparent)
     .withMaskColor(MKColor.Transparent)
     .withRippleColor('rgba(255, 255, 255, 0.2)')
     .withTextStyle({ color: 'white' })
     .build();

const SendButton = ({ postMessage, navigator }) => (
 <TouchableOpacity style={styles.navBarRightButton}>
   <FlatButton style={{ padding: 15, top: -3 }} onPress={() => postMessage(navigator)}/>
 </TouchableOpacity>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
 postMessage: navigator => dispatch(postMessage(navigator)),
});
const ConnectedSendButton = connect(mapStateToProps, mapDispatchToProps)(SendButton);

export default NavigationBarRouteMapper;
