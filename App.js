import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

import { Greeting } from './components/Greeting';
import { GalleryImages } from './components/GalleryImages';

export default class CuteGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name="Kate" />
        <Greeting name="Boo" />
        <Greeting name="Panda" />
        <GalleryImages />
      </View>
    );
  }
}
