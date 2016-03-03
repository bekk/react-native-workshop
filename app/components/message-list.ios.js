'use strict';

import React, {
  Component,
  ListView
} from 'react-native';

import { Message } from './message'

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
    let messages = this.props.messages.filter(validateMessage).reverse();
    let dataSource = this.getDataSource(messages);

    return (
      <ListView
        style={{ flex: 1 }}
        dataSource={dataSource}
        renderRow={Message}
      />
    )
  }
}

const validateMessage = message => {
  return message.message && message.message.length > 0
}

MessageList.propTypes = {
  messages: React.PropTypes.array
};
