'use strict';
import React, { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { postMessage } from '../../actions/actions'
import { MKButton, MKColor } from 'react-native-material-kit';

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

const NavigationBarButtons = {

    RightButton (route, navigator) {
        if (route && route.title === 'Skriv ny') {
            return (
                <TouchableOpacity style={styles.navBarRightButton}>
                  <ConnectedSendButton navigator={navigator} style={styles.sendButton} />
                </TouchableOpacity>
            );
        }
        return null;
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

export default NavigationBarButtons;
