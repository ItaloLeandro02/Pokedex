/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PokemonList } from './src/components/Pokemon/pokemon-list';

const App = () => {

  const optionsHandle = {
    headerShown: false,
  }
  
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={optionsHandle}>
        <Tab.Screen name="Pokémons" component={PokemonList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
