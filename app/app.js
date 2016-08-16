'use strict';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Colors } from './config/design';
import rnWorkshop from './reducers/reducers';
const store = createStore(rnWorkshop, applyMiddleware(thunk));
import Navigator from './components/navigation/navigator';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.BEKKDark}
          />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

export default App;
