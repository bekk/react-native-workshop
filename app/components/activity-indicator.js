'use strict';

import React, {
  View,
  ActivityIndicatorIOS,
  StyleSheet
} from 'react-native';

export const ActivityIndicator = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});
