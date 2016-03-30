'use strict';
import React, {
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import BackArrow from '../../resources/back-arrow.png';
import navigationBarButtons from './navigationbar-buttons';
import { navigatorPop } from '../../actions/actions';
import { Colors, Fonts } from './../../config/design';

const styles = {
  navBarTitleText: {
    fontSize: 16,
    fontFamily: Fonts.Book,
    color: Colors.White,
    marginVertical: 14
  },
  navBarLeftImage: {
    width: 50,
    height: 50
  }
};

const commonRouteMapper = (dispatch) => ({

    LeftButton(route, navigator, index) {
        if (index === 0) {
            return null;
        }
        return (
            <TouchableOpacity onPress={() => dispatch(navigatorPop())}>
                <Image source={BackArrow} style={styles.navBarLeftImage}/>
            </TouchableOpacity>
        );
    },

    Title(route) {
        return (
            <Text style={styles.navBarTitleText}>
              {route.title.toUpperCase()}
            </Text>
        );
    }
});

const getNavigationBarRouteMapper = (dispatch) => Object.assign(commonRouteMapper(dispatch), navigationBarButtons(dispatch));

export default getNavigationBarRouteMapper;
