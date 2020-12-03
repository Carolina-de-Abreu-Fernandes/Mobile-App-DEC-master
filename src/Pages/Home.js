import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => (
  <View>
    <Text>hi</Text>
    {[1, 2, 3, 4, 5].map((item) => {
      <TouchableOpacity
        key={item}
        onPress={() => {
          navigation.navigate(Consume);
        }}
      >
        <Text>Medição Mensal: 0{item}</Text>
      </TouchableOpacity>;
    })}
  </View>
);

Home.navigationOptions = {
  title: 'Home',
};

export default Home;

// ----------------------------------------------------------------------------
