'use strict';
import React, { Component, Platform, BackAndroid, StatusBar, View } from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rnWorkshop from './reducers/reducers';
const store = createStore(rnWorkshop);

import Navigator from './components/navigation/navigator';

class App extends Component {

  _handleBackbutton() {
    const navigator = this.refs.navigator.getNavigator();

    if (navigator.getCurrentRoutes().length === 1) {
      return false;
    }

    navigator.pop();
    return true;
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackbutton.bind(this));
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackbutton.bind(this));
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#b93221"
          />
          <Navigator ref="navigator" />
        </View>
      </Provider>
    );
  }
}

export default App;
