'use strict';

import React, {
  Component,
  View,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import MessageList from './message-list';
import ColoredFab from './colored-fab';
import { fetchMessages, postMessage } from '../actions/actions';
import { ErrorMessage } from './error-message'
import { newMessage } from './navigation/routes';
import { navigateTo } from '../actions/actions';
import { Colors } from './../config/design';

class MessageListContainer extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  _shouldRenderFabulousAndroidUI() {
    if (Platform.OS === 'android') {
      return <ColoredFab onPress={this.props.goToNewMessage}>+</ColoredFab>
    }
    return null;
  }

  render() {
    if (this.props.failedToFetchMessages) {
      return <ErrorMessage />
    }

    return (
      <View style={{ flex: 1, paddingTop: 66, backgroundColor: Colors.White }}>
        <MessageList
          refreshing={ this.props.isFetchingMessages }
          messages={ this.props.messages }
          refreshView={ this.props.fetchMessages }
          navigator={this.props.navigator}
        />
        {this._shouldRenderFabulousAndroidUI()}
      </View>
    );
  }
}

MessageListContainer.propTypes = {
  failedToFetchMessages: React.PropTypes.bool.isRequired,
  isFetchingMessages: React.PropTypes.bool.isRequired,
  messages: React.PropTypes.array.isRequired,
  fetchMessages: React.PropTypes.func.isRequired
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
  goToNewMessage: () => dispatch(navigateTo(newMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);
