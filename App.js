import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Login from './src/ScreenRegister';

export default class appDEC extends Component {
  render() {
    return;
    <View style={styles.container}>
      <HomeScreen />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('appDEC', () => appDEC);
