'use strict';
import React, { Component } from 'react';
import { ListView, RefreshControl, View, Text } from 'react-native';
import Message from './message';
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
    let messages = this.props.messages.filter(validateMessage).reverse();
    let dataSource = this._getDataSource(messages);

    return (
      <ListView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={ this.props.refreshing }
            onRefresh={ this.props.refreshView }
            tintColor="#ff0000"
            title="Laster..."
            colors={ [Colors.Red, Colors.Green, Colors.Yellow] }
            />
        }
        dataSource={ dataSource }
        renderRow={ renderRow }
        />
    );
  }
}

const renderRow = (rowData) => {
  const image = rowData.image;
  const from = rowData.from || '';
  const message = rowData.message || '';

  return (
    <Message from={ from }
      message={ message }
      image={ image } />
  );
}

const validateMessage = message => {
  return message.message && message.message.length > 0
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  refreshView: React.PropTypes.func.isRequired,
  refreshing: React.PropTypes.bool.isRequired
};
