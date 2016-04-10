'use strict';
import React, { Component, ListView, RefreshControl } from 'react-native';
import { Colors } from './../config/design';
const DSConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: DSConfig
    };
  }

  _getDataSource(messages) {
    return this.state.dataSource.cloneWithRows(messages);
  }

  render() {
    // Hint: React-native has a ListView component, which is great for lists *wink, wink*
    return <View><Text>List</Text></View>;
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  refreshView: React.PropTypes.func.isRequired,
  refreshing: React.PropTypes.bool.isRequired
};
