'use strict';
import React, { Component, BackAndroid, StatusBar, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Colors } from './config/design';
import rnWorkshop from './reducers/reducers';
const store = createStore(rnWorkshop, applyMiddleware(thunk));
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
            backgroundColor={Colors.BEKKDark}
          />
          <Navigator ref="navigator" />
        </View>
      </Provider>
    );
  }
}

export default App;
