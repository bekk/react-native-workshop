import React, { ToolbarAndroid, StyleSheet, View } from 'react-native';

var toolbarActions = [
  {title: 'New', show: 'always'},
  {title: 'List', show: 'always'},
  {title: 'Settings'}
];

const setView = (action) => {
  console.log(action)
};

const Toolbar = ({ actionText, navigator }) => (
  <View style={styles.toolbar}>
    <ToolbarAndroid
      actions={toolbarActions}
      onActionSelected={action => setView(action)}
      style={styles.toolbar}
      subtitle={actionText}
      title="React native workshop" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  toolbar: {
    backgroundColor: '#FF5252',
    height: 56
  }
});

export default Toolbar;
