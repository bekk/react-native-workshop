'use strict';

import React, {
  View,
  Component,
  Image,
  Text
} from 'react-native';

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
      return null
    }

    return <Image
      style={ styles.thumb }
      source={{ uri: this.props.source }}
      defaultSource={{ uri: "add default image" }}
      onError={ this._onLoadImageFailure.bind(this) } />
  }
}

CustomImage.propTypes = {
  source: React.PropTypes.string.isRequired
};

const styles = {
  thumb: {
    marginBottom: 5,
    flexDirection:'row',
    height: 240,
  },
}
