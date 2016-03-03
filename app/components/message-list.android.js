'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ListView,
  ToolbarAndroid
} from 'react-native';

import ColoredFab from './colored-fab';
import { Message } from './message';

const fixture = [
  {id: 1, from: 'Ola folkestad', text: 'Wtf mate, ballene på bordet'},
  {id: 2, from: 'Jobi', text: 'Vi trenger mer POW og WOW.'},
  {id: 3, from: 'Toan', text: 'Jeg trenger nytt visittkort:'},
];

const DSConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

class MessagePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: DSConfig.cloneWithRows(fixture)
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <Message {...data} />} />
        <ColoredFab>+</ColoredFab>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

export default MessagePage;
