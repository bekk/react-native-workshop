'use strict';

import React, {
	View,
  Text
} from 'react-native';
import Colors from './../config/colors';
import Image from './image';

export const Message = (rowData, sectionID, rowID) => {
	console.log(rowData);
  return (
    <View style={ styles.container }>
      <View style={ styles.row }>
        <Text style={ styles.from }>
          { rowData.from }
        </Text>
				{ _maybeRenderImage(rowData.image) }
        <Text style={ styles.message }>
          { rowData.message }
        </Text>
      </View>
      <View style={ styles.separator } />
    </View>
  );
}

const _maybeRenderImage = source => {
	if (source !== undefined && source.length > 0) {
		return <Image source={source} />
	}
}

Message.propTypes = {
  from: React.PropTypes.string,
  message: React.PropTypes.string
};

const styles = {
	container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Colors.black,
    margin: 16,
    marginBottom: 0
  },
  row: {
     flexDirection: 'column',
     justifyContent: 'center',
     padding: 16,
   },
   separator: {
     height: 1,
     backgroundColor: '#d9d9d9',
   },
   message: {
     flex: 1,
     color: '#6e6e6e'
   },
   from: {
     flex: 1,
     color: '#212121',
     fontWeight: '500',
     marginBottom: 5
   }
};
