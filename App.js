import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

import { Greeting } from './components/Greeting';
import { GalleryImages } from './components/GalleryImages';
import { styles } from './components/StyleSheet';

export default class CuteGreetings extends Component {
  render() {
    return (
      <View style={styles.viewcontainer}>
        <Greeting name="Kaoe" />
        <Greeting name="Boo" />
        <Greeting name="Panda" />
        <GalleryImages />
      </View>
    );
  }
}
