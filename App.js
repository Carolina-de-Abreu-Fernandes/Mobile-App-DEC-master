import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './src/Pages/Home';
import Register from './src/Pages/Register';
import Consume from './src/Pages/Consume';
import Alerts from './src/Pages/Alerts';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Consumo':
              iconName = 'list';
              break;
            case 'Notificações':
              iconName = 'bell';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#152525',
        inactiveTintColor: '#1e3535',
        showLabel: false,
        style: {
          backgroundColor: '#fffceb',
        },
      }}
    >
      <Tab.Screen name="Consumo" component={Consume} />
      <Tab.Screen name="Notificações" component={Alerts} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Consume"
          component={Consume}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
