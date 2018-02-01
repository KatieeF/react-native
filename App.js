import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class TastyFoods extends Component {
  render() {
    let pic = {
      uri:
        'https://lh6.googleusercontent.com/1db5oGNBot28BkzNpoeC5h2hI5DJzkWp3QMgGaEqqN6XaUBvEQm8ToE5-hajSoIRVEpZUPNc7NgrUk4=w3000-h1738-rw',
    };

    return <Image source={pic} style={{ width: 300, height: 250 }} />;
  }
}
