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

import { setNewMessageText, setUsername } from '../actions/actions';

class StartPage extends Component {

    render() {
        const { username, newMessage, setNewMessageText, setUsername } = this.props;
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
                  value={newMessage}
                  onChangeText={setNewMessageText} />
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

const mapStateToProps = ({ username, newMessageText }) => ({ username, newMessageText });
const mapDispatchToProps = (dispatch) => ({
    setNewMessageText: newMessageText => dispatch(setNewMessageText(newMessageText)),
    setUsername: name => dispatch(setUsername(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
