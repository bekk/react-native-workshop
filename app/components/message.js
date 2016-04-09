'use strict';
import React, { View, Text } from 'react-native';
import { Colors, Fonts } from './../config/design';
import Image from './image';

export const Message = ({ from, message, image }) => {
  return (
    <View>
      <View style={ styles.container }>
        <View style={ styles.row }>
          <Text style={ styles.text }>
            { from.toUpperCase() }
          </Text>
        </View>
        <View style={styles.underline} />
        { _maybeRenderImage(image) }
        <View style={ styles.row }>
          <Text style={ styles.text }>{ message }</Text>
        </View>
      </View>
      <View style={ styles.separator } />
    </View>
  );
};

const _maybeRenderImage = source => {
  if (source !== undefined && source.length > 0) {
    return (
      <View style={styles.image}>
        <Image source={source} />
      </View>
    );
  }
};

Message.propTypes = {
  from: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  image: React.PropTypes.string
};

const styles = {
  container: {
    backgroundColor: Colors.Dark,
    margin: 16,
    marginBottom: 0
  },
  row: {
    padding: 16
  },
  underline: {
    borderBottomColor: Colors.Red,
    borderBottomWidth: 2,
    marginLeft: 16,
    marginRight: 16,
    width: 60
  },
  image: {
    marginTop: 16
  },
  separator: {
    height: 1,
    backgroundColor: Colors.Dark1,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16
  },
  text: {
    color: Colors.White,
    fontFamily: Fonts.Light
  }
};
