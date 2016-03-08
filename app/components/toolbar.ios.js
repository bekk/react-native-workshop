import React, {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

const Toolbar = ({ actionText, triggerFuckingThaShit }) => (
  <View style={ styles.toolbar }>
    <View style={ {marginTop: 10}}>
      <Text style={ styles.title }>Messages</Text>
      <TouchableHighlight style={{alignItems: 'flex-end'}} onPress={ triggerFuckingThaShit }>
        <Text>New message</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#FF5252',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {

  }
});

export default Toolbar;
