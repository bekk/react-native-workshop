'use strict';

import React, {
  Component,
  View,
  Platform
} from 'react-native';
import MessageList from './message-list';
import ColoredFab from './colored-fab';
import { ErrorMessage } from './error-message'
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
  failedToFetchMessages: React.PropTypes.bool,
  isFetchingMessages: React.PropTypes.bool,
  messages: React.PropTypes.array
};

// Redux related code
import { connect } from 'react-redux';
import { fetchMessages, postMessage, navigateTo } from '../actions/actions';
import { newMessage } from './navigation/routes';
const mapStateToProps = ({ failedToFetchMessages, isFetchingMessages, messages }) =>
  ({ failedToFetchMessages, isFetchingMessages, messages })
const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages(dispatch)),
  goToNewMessage: () => dispatch(navigateTo(newMessage))
});
export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);
