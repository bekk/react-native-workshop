'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} from 'react-native';

export default class MessageList extends Component {

  constructor(props) {
    super(props);
    this.dateSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  render() {
    let messages = this.props.messages.map(message => message);
    messages = this.dateSource.cloneWithRows(messages);

    return (
      <ListView
        style={{flex: 1, marginBottom: 500}}
        dataSource={messages}
        renderRow={renderRow}
      />
    )
  }
}

function getDataSource(messages) {
  return
}

function renderRow(rowData, sectionID, rowID) {
  const maybeRenderImage = source => {
    if (source !== undefined) {
      return <Image source={{uri: source}} />
    }
  }

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.username}>
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

const styles = StyleSheet.create({
  row: {
     flexDirection: 'column',
     justifyContent: 'center',
     padding: 16,
     backgroundColor: '#05A5D1',
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
   username: {
     flex: 1,
     color: '#DDDDDD',
     marginBottom: 5
   }
});
