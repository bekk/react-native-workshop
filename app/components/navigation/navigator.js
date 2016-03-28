import React, {
    View,
    Component,
    Navigator,
    StyleSheet,
    Platform
} from 'react-native';

import { Colors } from './../../config/design';

import ListMessageContainer from '../messages-list-container';
import NewMessage from './../new-message';
import NavigationBarRouteMapper from './navigationbar-routemapper';

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
                initialRoute={{ component: ListMessageContainer, title: 'Meldinger' }}
                renderScene={_renderScene}
                configureScene={_sceneConfig()}
                navigationBar={(
                <Navigator.NavigationBar
                    routeMapper={NavigationBarRouteMapper}
                    style={styles.navBar}
                />
            )}
            />
        );
    }
}

export default CustomNavigator;
