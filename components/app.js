'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rnWorkshop from './reducers';
const store = createStore(rnWorkshop);

import MessageInput from './message-input';
import ListMessageContainer from './messages-list-container';

function _renderScene(route, navigator) {
  const Component = route.component;
  return <Component {...this.props} navigator={navigator} />
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ component: ListMessageContainer }}
          renderScene={_renderScene}
        />
      </Provider>
    );
  }
}


export default App;
