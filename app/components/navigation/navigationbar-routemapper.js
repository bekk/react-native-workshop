'use strict';
import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
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
  }
};

const commonRouteMapper = (dispatch) => ({

  LeftButton(route, navigator, index) {
    return null;
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
