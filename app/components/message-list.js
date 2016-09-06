'use strict';
import React, { Component } from 'react';
import { ListView, RefreshControl, Image, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from './../config/design';

import { selectMessage } from '../actions/actions';

const DSConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: DSConfig
    };
  }

  _getDataSource(messages) {
    return this.state.dataSource.cloneWithRows(messages.reverse());
  }

  render() {
    // Hint: React-native has a ListView component, which is great for lists *wink, wink*
    const messages = this.props.messages;
    const dataSource = this._getDataSource(messages);

    return(
      <ListView
        style={{flex : 1, backgroundColor: Colors.White }}
        dataSource={dataSource}
        renderRow={(message) =>
          <TouchableOpacity style={styles.message} onPress={() => this.props.selectOne(message)}>
            <Text style={styles.messageFrom}>{message.from.toUpperCase()}</Text>
            <View style={styles.messageBreak}/>
            {displayImage(message)}
            <Text style={styles.messageText}>{message.message}</Text>
          </TouchableOpacity>
        }
        refreshControl={
          <RefreshControl
            refreshing={this.props.refreshing}
            onRefresh={this.props.refreshView}
          />
        }
      />
    );
  }
}

const displayImage = (message) => {
  if (message.image !== undefined) {
    return (
      <View>
        <Image style={styles.messageImage} source={{ uri : message.image }}/>
      </View>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  refreshView: React.PropTypes.func.isRequired,
  refreshing: React.PropTypes.bool.isRequired
};

const styles = {
  message : {
    flex : 0,
    backgroundColor : Colors.Dark,
    margin : 20
  },
  messageFrom : {
    color : Colors.White,
    margin: 10
  },
  messageBreak : {
    borderBottomColor : Colors.Red,
    borderBottomWidth : 2,
    margin : 10,
    width : 50
  },
  messageText : {
    color : Colors.White,
    margin: 10
  },
  messageImage : {
    marginBottom: 5,
    flexDirection:'row',
    height: 240
  }
}
