'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rnWorkshop from './reducers';
const store = createStore(rnWorkshop);

import StartPage from './components/start-page';
import MessageList from './components/message-list';

var toolbarActions = [
  {title: 'New', show: 'always'},
  {title: 'List', show: 'always'},
  {title: 'Settings'}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionText: 'List'
    };

    this._onActionSelected = this._onActionSelected.bind(this);
  }

  _onActionSelected(position) {
    this.setState({
      actionText: toolbarActions[position].title,
    });
  }

  _renderPage() {
    if (this.state.actionText !== 'List') {
      return <StartPage />;
    } else {
      return <MessageList />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
            actions={toolbarActions}
            onActionSelected={this._onActionSelected}
            style={styles.toolbar}
            subtitle={this.state.actionText}
            title="React native workshop" />
          {this._renderPage()}
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  toolbar: {
    backgroundColor: '#FF5252',
    height: 56
  }
});

export default App;
