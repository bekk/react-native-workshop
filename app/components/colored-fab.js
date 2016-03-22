'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { MKButton, MKColor } from 'react-native-material-kit';
import { White, Red } from './../config/colors';

const AccentColoredFab = MKButton.coloredFab()
  .withBackgroundColor(Red)
  .build();

const localStyles = {
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 25,
    right: 25,
    flex: 1,
    alignItems: 'center',
    elevation: 4
  },
  fabText: {
    marginTop: -3,
    fontSize: 45,
    color: White,
    lineHeight: 60
  }
};

function ColoredFab({styles = {}, children, ...props}) {
	const mFab = Object.assign({}, localStyles.fab, styles.fab || {});
	const mFabText = Object.assign({}, localStyles.fabText, styles.fabText || {});
	return (
			<AccentColoredFab style={mFab} {...props}>
	          <Text style={mFabText}>{children}</Text>
	        </AccentColoredFab>
		);
}

export default ColoredFab;
