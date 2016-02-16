'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import Textarea from './textarea';
import Button from 'react-native-button';
import { MKButton, MKTextField, MKColor } from 'react-native-material-kit';

const ColoredRaisedButton = MKButton.coloredButton()
  .withText('Send')
  .withBackgroundColor(MKColor.Teal)
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Number...')

  .withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .build();

class StartPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>React Native Workshop</Text>
        <TextInput placeholder="Name" />
        <Textarea style={styles.message} multiline placeholder="Message" />
        <ColoredRaisedButton width={150} height={50} />
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: '600'
  }
});

export default StartPage;
    