'use strict';

import React, {
  View,
  Component,
  ListView,
  RefreshControl
} from 'react-native';

import { Message } from './message'
import { Colors } from './../config/design';

const DSConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSource: DSConfig
    };
  }

  _getDataSource(messages) {
    return this.state.dateSource.cloneWithRows(messages);
  }

  render() {
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
    )
  }
}

const renderRow = (rowData) => {
  const image = rowData.image || undefined;
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
