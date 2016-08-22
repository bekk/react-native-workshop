'use strict';

import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import MessageList from './message-list';
import ColoredFab from './colored-fab';
import { ErrorMessage } from './error-message';
import { Colors } from './../config/design';

class MessageListContainer extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  _shouldRenderFabulousAndroidUI() {
    if (Platform.OS === 'android') {
      return <ColoredFab onPress={this.props.goToNewMessage}>+</ColoredFab>
    }
    return <View/>;
  }

  render() {
    if (this.props.failedToFetchMessages) {
      return <ErrorMessage />;
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

// Redux related code
import { connect } from 'react-redux';
import { fetchMessages, navigateTo } from '../actions/actions';
import { newMessageRoute } from './navigation/routes';
const mapStateToProps = ({ failedToFetchMessages, isFetchingMessages, messages }) =>
  ({ failedToFetchMessages, isFetchingMessages, messages });
const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages(dispatch)),
  goToNewMessage: () => dispatch(navigateTo(newMessageRoute))
});
export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);
