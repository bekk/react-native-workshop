'use strict';
import React, {
	View,
  Text,
	Image
} from 'react-native';

function Message(rowData, sectionID, rowID) {
  const maybeRenderImage = source => {
    if (source !== undefined) {
      return <Image style={styles.thumb} source={{uri: source}} />
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.from}>
          {rowData.from}
        </Text>
        <Text style={styles.message}>
          {rowData.message}
        </Text>
        { maybeRenderImage(rowData.image) }
      </View>
      <View style={styles.separator} />
    </View>
  );
}

const styles = {
	container: {
    flex: 1,
  },
  row: {
     flexDirection: 'column',
     justifyContent: 'center',
     padding: 16,
   },
   separator: {
     height: 1,
     backgroundColor: '#CCCCCC',
   },
   thumb: {
     width: 64,
     height: 64,
   },
   message: {
     flex: 1,
     color: '#FFFFFF'
   },
   from: {
     flex: 1,
     color: '#DDDDDD',
     marginBottom: 5
   }
};

export default Message;
