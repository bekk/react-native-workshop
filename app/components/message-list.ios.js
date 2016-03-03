'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} from 'react-native';

import Message from './message'

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  render() {
    let messages = this.props.messages.map(message => message).reverse();
    messages = this.state.dateSource.cloneWithRows(messages);

    return (
      <ListView
        style={{flex: 1, marginBottom: 500}}
        dataSource={messages}
        renderRow={Message}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
