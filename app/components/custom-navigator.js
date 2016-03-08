import React, {
    Component,
    Navigator,
    StyleSheet
} from 'react-native';

import ListMessageContainer from './messages-list-container';
import NavigationBarRouteMapper from './navigationbar-routemapper';

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#da4336',
        height: 50
    }
});

function _renderScene(route, navigator) {
    const Component = route.component;
    return <Component {...this.props} navigator={navigator} />;
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