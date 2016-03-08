'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

import Textarea from './textarea';

import { postMessage, setMessage, setUsername } from '../actions/actions';

class StartPage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { username, message, setMessage, setUsername, postMessage } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                  placeholder="Name"
                  value={username}
                  onChangeText={setUsername}
                  />
                <Textarea
                  style={styles.message}
                  multiline
                  placeholder="Message"
                  value={message}
                  onChangeText={setMessage} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});

const mapStateToProps = ({ username, message}) => ({ username, message });
const mapDispatchToProps = (dispatch) => ({
    postMessage: (message) => dispatch(postMessage(dispatch, message)),
    setMessage: (message) => dispatch(setMessage(message)),
    setUsername: (name) => dispatch(setUsername(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
