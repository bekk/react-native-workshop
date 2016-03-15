'use strict';
import React, {
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import BackArrow from '../../resources/back-arrow.png';
import NavigationBarButtons from './navigationbar-buttons';

const styles = {
  navBarTitleText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    marginVertical: 14
  },
  navBarLeftImage: {
    width: 50,
    height: 50
  }
};

const NavigationBarRouteMapper = {

    LeftButton(route, navigator, index) {
        if (index === 0) {
            return null;
        }
        return (
            <TouchableOpacity onPress={navigator.pop}>
                <Image source={BackArrow} style={styles.navBarLeftImage}/>
            </TouchableOpacity>
        );
    },

    Title(route, navigator) {
        return (
            <Text style={styles.navBarTitleText}>
              {route.title}
            </Text>
        );
    }
};

export default Object.assign(NavigationBarRouteMapper, NavigationBarButtons);
