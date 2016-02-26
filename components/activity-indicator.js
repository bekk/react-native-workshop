'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
  ActivityIndicatorIOS
} from 'react-native';

export default class ActivityIndicatorView extends Component {

  render() {
    return (
        <View style={styles.container}>
          <ActivityIndicatorIOS
              animating={true}
              style={{height: 80}}
              size="large"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});
