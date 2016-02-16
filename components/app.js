'use strict';
import React, {
  AppRegistry,
  Component,
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rnWorkshop from './reducers';
const store = createStore(rnWorkshop);

import MessageInput from './message-input'

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <MessageInput />
      </Provider>
    );
  }
}


export default App;
