import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CardList} from './src/components/Card/List';
import {CardDetail} from './src/components/Card/Detail';

const App = () => {
  const optionsHandle = {
    headerShown: false,
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={optionsHandle}>
        <Tab.Screen name="Cards" component={CardList} />
        <Tab.Screen name="CardDetail" component={CardDetail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
