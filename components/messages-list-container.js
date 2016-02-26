'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import { bindActionCreators } from 'redux';
import * as messageActions from './actions';
import { connect } from 'react-redux';

import MessageList from './message-list';
import { fetchMessages } from './actions';
import ActivityIndicatorView from './activity-indicator';
import ErrorMessage from './error-message'

class ListMessagesContainer extends Component {

  constructor(props) {
    super(props);
    this.props.fetchMessages();
  }

  render() {
    if (this.props.isFetchingMessages) {
      return <ActivityIndicatorView />
    }
    else if (this.props.failedToFetchMessages) {
      return <ErrorMessage />
    }

    return (
      <View style={{backgroundColor: '#F5FCFF'}}>
        <MessageList messages={this.props.messages}/>
      </View>
    );
  }
}


const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  fetchMessages: message => dispatch(fetchMessages(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMessagesContainer);
