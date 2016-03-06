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
import { MKButton, MKTextField, MKColor } from 'react-native-material-kit';

import { postMessage } from '../actions/actions';

const ColoredRaisedButton = MKButton.coloredButton()
  .withText('Send')
  .withBackgroundColor(MKColor.Teal)
  .build();

class StartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            from: '',
            message: ''
        };
    }

    render() {
        const { postMessage } = this.props;
        return (
            <View style={styles.container}>
                <TextInput placeholder="Name" value={this.state.from} onChangeText={(from) => this.setState({from})}/>

                <Textarea style={styles.message} multiline placeholder="Message" value={this.state.message} onChangeText={(message) => this.setState({message})} />
                <ColoredRaisedButton width={150} height={50} onPress={() => postMessage(this.state)}/>
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
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => {

    return {};
};

const mapDispatchToProps = (dispatch) => ({
    postMessage: (message) => dispatch(postMessage(dispatch, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
