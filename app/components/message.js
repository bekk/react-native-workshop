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
        <View style={styles.underline}>
          <Text style={ styles.from }>
            { rowData.from }
          </Text>
        </View>
      </View>
	  { _maybeRenderImage(rowData.image) }
      <View style={ styles.messagerow }>
        <Text style={ styles.message }>{ rowData.message }</Text>
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
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  messagerow: {
      padding: 16,
      paddingTop: 0
  },
  underline: {
    borderBottomColor: Colors.red,
    borderBottomWidth: 2
  },
  image: {
    marginBottom: 8
  },
  separator: {
    height: 1,
    backgroundColor: Colors.red,
  },
  from: {
    color: Colors.white,
    marginBottom: 12
  },
  message: {
    color: Colors.white
  }
};
