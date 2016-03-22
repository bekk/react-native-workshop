'use strict';

import React, {
	View,
  Text
} from 'react-native';
import Colors from './../config/colors';
import Image from './image';

export const Message = (rowData, sectionID, rowID) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.row }>
        <Text style={ styles.text }>
          { rowData.from }
        </Text>
      </View>
      <View style={styles.underline} />
	  { _maybeRenderImage(rowData.image) }
      <View style={ styles.row }>
        <Text style={ styles.text }>{ rowData.message }</Text>
      </View>
      <View style={ styles.separator } />
    </View>
  );
}

const _maybeRenderImage = source => {
	if (source !== undefined && source.length > 0) {
		return (
          <View style={styles.image}>
            <Image source={source} />
          </View>
        );
	}
}

Message.propTypes = {
  from: React.PropTypes.string,
  message: React.PropTypes.string
};

const styles = {
  container: {
    backgroundColor: Colors.black,
    margin: 16,
    marginBottom: 0
  },
  row: {
      padding: 16
  },
  underline: {
    borderBottomColor: Colors.red,
    borderBottomWidth: 2,
    marginLeft: 16,
    marginRight: 16,
    width: 60
  },
  image: {
    marginTop: 16
  },
  separator: {
    height: 1,
    backgroundColor: Colors.red,
  },
  text: {
    color: Colors.white
  }
};
