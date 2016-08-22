import React, { Component } from 'react';
import { BackAndroid, Navigator, StyleSheet, Platform } from 'react-native';
import { newMessageRoute, messageListRoute } from './routes';
import getNavigationBarRouteMapper from './navigationbar-routemapper';
import { connect } from 'react-redux';
import { setNavigator } from '../../actions/actions';
import { Colors } from './../../config/design';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.Dark
  }
});

function _renderScene(route, navigator) {
  const Component = route.component;
  return <Component {...this.props} navigator={navigator} />;
}

function _sceneConfig() {
  if (Platform.OS === 'android') {
    return () => Navigator.SceneConfigs.FloatFromBottomAndroid;
  } else {
    return () => Navigator.SceneConfigs.FloatFromBottom;
  }
}

class CustomNavigator extends Component {
  getNavigator() {
    return this.refs.navigator;
  }

  _handleBackbutton() {
    const navigator = this.getNavigator();
    if (navigator.getCurrentRoutes().length === 1) {
      return false;
    }
    navigator.pop();
    return true;
  }

  componentDidMount() {
    this.props.dispatch(setNavigator(this.getNavigator()));
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackbutton.bind(this));
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackbutton.bind(this));
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={newMessageRoute}
        renderScene={_renderScene}
        configureScene={_sceneConfig()}
        navigationBar={(
          <Navigator.NavigationBar
            routeMapper={getNavigationBarRouteMapper(this.props.dispatch)}
            style={styles.navBar}
            />
        )}
        />
    );
  }

}

export default connect()(CustomNavigator);
