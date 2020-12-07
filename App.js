import { AppRegistry } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Consume } from './src/Pages/Consume';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate(Consume);
//         }}
//       >
//         <Text>Tela de Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function ConsumeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Consume!</Text>
//     </View>
//   );
// }

// // ------------------------------------------------------------------------------------------------------------------------------------------

// const OptionStack = createStackNavigator();

// function OptionsStack() {
//   return (
//     <OptionStack.Navigator>
//       <OptionStack.Screen name="Home" component={HomeScreen} />
//       <OptionStack.Screen name="Consume" component={Consume} />
//     </OptionStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={OptionsStack} />
//       <Tab.Screen name="Consumo" component={ConsumeScreen} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    // <NavigationContainer>
    //   <MyTabs />
    // </NavigationContainer>
    <Consume />
  );
}
