'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { MKButton } from 'react-native-material-kit';
import { Colors } from './../config/design';

const AccentColoredFab = MKButton.coloredFab()
  .withBackgroundColor(Colors.Red)
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
    color: Colors.White,
    lineHeight: 60
  }
};

function ColoredFab({styles = {}, children, onPress}) {
	const mFab = Object.assign({}, localStyles.fab, styles.fab || {});
	const mFabText = Object.assign({}, localStyles.fabText, styles.fabText || {});
	return (
			<AccentColoredFab style={mFab} onPress={onPress}>
	          <Text style={mFabText}>{children}</Text>
	        </AccentColoredFab>
		);
}

ColoredFab.propTypes = {
  onPress: React.PropTypes.func.isRequired
}

export default ColoredFab;
