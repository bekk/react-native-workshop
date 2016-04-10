import React, { Component, Navigator, StyleSheet, Platform } from 'react-native';
import { newMessage } from './routes';
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

  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={newMessage}
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

  componentDidMount() {
    this.props.dispatch(setNavigator(this.getNavigator()));
  }
}

export default connect()(CustomNavigator);
