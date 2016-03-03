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

const DSConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSource: DSConfig
    };
  }

  getDataSource(messages) {
    return this.state.dateSource.cloneWithRows(messages);
  }

  render() {
    let messages = this.props.messages.map(message => message).reverse();
    let dataSource = this.getDataSource(messages);

    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={Message}
      />
    )
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array
};

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
