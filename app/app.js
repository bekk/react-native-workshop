'use strict';
import React, { Component, Navigator, Platform, BackAndroid } from 'react-native';
import StatusBar from 'react-native-android-statusbar';

if (Platform.OS === 'android') {
  StatusBar.setHexColor('#b93221');
}

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rnWorkshop from './reducers/reducers';
const store = createStore(rnWorkshop);

import Router from './components/router';
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
        <CustomNavigator ref="navigator" />
      </Provider>
    );
  }
}

export default App;
