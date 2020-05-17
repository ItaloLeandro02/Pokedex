import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './pages/Main';
import Detail from './pages/CardDetail';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Card" component={Detail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
