'use strict';
import React, {
    Component,
    Navigator,
    BackAndroid
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rnWorkshop from './reducers/reducers';
const store = createStore(rnWorkshop);

import ListMessageContainer from './components/messages-list-container';

function _renderScene(route, navigator) {
    const Component = route.component;
    return <Component {...this.props} navigator={navigator}/>
}

class App extends Component {
    constructor(props) {
        super(props);

        this._handleBackbutton = this._handleBackbutton.bind(this);

    }
    _handleBackbutton() {
        const navigator = this.refs.navigator;

        if (navigator.getCurrentRoutes().length === 1) {
            return false;
        }

        navigator.pop();
        return true;
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._handleBackbutton);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this._handleBackbutton);
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator
                    ref="navigator"
                    initialRoute={{ component: ListMessageContainer}}
                    renderScene={_renderScene}
                />
            </Provider>
        );
    }
}

export default App;
