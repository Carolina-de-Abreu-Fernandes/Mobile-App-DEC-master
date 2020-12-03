import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Consume = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text> Hi </Text>
  </View>
);

Consume.navigationOptions = {
  title: 'Consumo',
};

export default Consume;
