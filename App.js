import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return <Text>Hello there {this.props.name}</Text>;
  }
}

export default class CuteGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name="Kate" />
        <Greeting name="Boo" />
        <Greeting name="Panda" />
      </View>
    );
  }
}
