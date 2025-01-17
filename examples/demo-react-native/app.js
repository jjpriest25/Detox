import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

class example extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{width: '100%', height: 100, backgroundColor: 'blue'}}>
        <View testID='test_ID' style={{position: 'absolute', top: 150, width: '100%', height: 100, backgroundColor: 'red'}} />
      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => example);
