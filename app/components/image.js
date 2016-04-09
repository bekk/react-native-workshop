'use strict';
import React, { Component, Image } from 'react-native';
import placeholder from '../resources/default-placeholder.png';

export default class CustomImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failedToLoadImage: false
    };
  }

  _onLoadImageFailure() {
    this.setState({ failedToLoadImage: true });
  }

  render() {
    if (this.state.failedToLoadImage) {
      return null;
    }

    return <Image
      style={ styles.thumb }
      source={{ uri: this.props.source }}
      defaultSource={placeholder}
      onError={ this._onLoadImageFailure.bind(this) } />;
  }
}

CustomImage.propTypes = {
  source: React.PropTypes.string.isRequired
};

const styles = {
  thumb: {
    marginBottom: 5,
    flexDirection:'row',
    height: 240
  }
};
