'use strict';
import React, {
    Component,
    BackAndroid,
} from 'react-native';

import StatusBar from 'react-native-android-statusbar';
StatusBar.setHexColor('#b93221');

import CustomNavigator from './components/custom-navigator';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rnWorkshop from './reducers/reducers';

const store = createStore(rnWorkshop);

class App extends Component {
    constructor(props) {
        super(props);

        this._handleBackbutton = this._handleBackbutton.bind(this);
    }

    _handleBackbutton() {
        const navigator = this.refs.navigator.getNavigator();

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
                <CustomNavigator ref="navigator" />
            </Provider>
        );
    }
}

export default App;
