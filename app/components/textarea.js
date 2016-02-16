'use strict';
import React, {
  Component,
  View,
  TextInput,
  Animated
} from 'react-native';

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '' || this.props.value, 
      height: new Animated.Value(15) 
    };
  }

  componentDidMount() {
    Animated.spring(this.state.height, {velocity: 1}).start();

  }

  render() {
    return (
        <Animated.View style={{height: this.state.height}}>
          <TextInput 
            {...this.props}
            multiline={true}
            onChange={(e) => {
              const h = Math.max(55, e.nativeEvent.contentSize.height);
              this.setState({
                text: e.nativeEvent.text
              }, () => {
                this.state.height.setValue(h);
              });
            }}
            style={{flex: 1}}
            value={this.state.text} />
          </Animated.View>
    );  
  }
}

export default Textarea;
    