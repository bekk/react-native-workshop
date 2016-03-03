'use strict';

import React, {
  Component,
  View
} from 'react-native';

import { bindActionCreators } from 'redux';
import * as messageActions from '../actions/actions';
import { connect } from 'react-redux';

import MessageList from './message-list';
import { fetchMessages, postMessage } from '../actions/actions';
import { ActivityIndicator } from './activity-indicator';
import { ErrorMessage } from './error-message'

class ListMessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.props.fetchMessages();
    this.props.postMessage({ message: 'Shalalalla aaaaa vi pisse på ARSENAL!', from: 'Lomis the KING!' });
  }

  render() {
    if (this.props.isFetchingMessages) {
      return <ActivityIndicator />
    }
    else if (this.props.failedToFetchMessages) {
      return <ErrorMessage />
    }

    return (
      <View style={{flex: 1, backgroundColor: '#05A5D1'}}>
        <MessageList messages={this.props.messages}/>
      </View>
    );
  }
}

ListMessagesContainer.propTypes = {
  failedToFetchMessages: React.PropTypes.bool,
  isFetchingMessages: React.PropTypes.bool,
  messages: React.PropTypes.array
};

const mapStateToProps = state => {
  return {
    failedToFetchMessages: state.failedToFetchMessages,
    isFetchingMessages: state.isFetchingMessages,
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages(dispatch)),
  postMessage: (message) => dispatch(postMessage(dispatch, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMessagesContainer);
