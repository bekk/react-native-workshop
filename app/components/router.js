import React, { StyleSheet, View, Platform } from 'react-native';
import { connect } from 'react-redux'

import StartPage from './start-page'
import MessageList from './message-list'
import Toolbar from './toolbar'
import { setMessage, setUsername, setView } from '../actions/actions'
import ColoredFab from './colored-fab';

const Router = ({ viewName, navigator, ...props }) => {
  navigator = wrapNavigator(navigator);
  const ChosenView = chooseView(viewName, navigator)
  return (
    <View style={styles.container}>
      <Toolbar actionText='hello' navigator={navigator}/>
      <ChosenView {...props}/>
      { Platform.OS === 'android' ? <ColoredFab>+</ColoredFab> : null }
    </View>
  );
};

const chooseView = (viewName, navigator) => {
  switch (viewName) {
    case 'messageList': return (props => <MessageList {...props} navigator={navigator}/>)
  }
};

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

const wrapNavigator = (navigator) => ({
  push: viewName => navigator.push({ viewName }),
  pop: () => navigator.pop()
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
