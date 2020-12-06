import React from 'react';
import Home from './Pages/Home';
import Consume from './Pages/Consume';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    Consumo: Consume,
  })
);

export default Routes;
