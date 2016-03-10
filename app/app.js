'use strict';
import React, { Component, Navigator, Platform, BackAndroid, StatusBar, View } from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rnWorkshop from './reducers/reducers';
const store = createStore(rnWorkshop, applyMiddleware(thunk));

import CustomNavigator from './components/custom-navigator';

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
          <StatusBar backgroundColor="#b93221"/>
          <CustomNavigator ref="navigator" />
        </View>
      </Provider>
    );
  }
}

export default App;
