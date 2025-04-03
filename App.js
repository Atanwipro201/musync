// File: App.js
import React from 'react';

import Welcome from "./components/welcome"
import { NavigationContainer } from '@react-navigation/native';
import MonkeyScreen from './screens/MonkeyScreen'
import NakamasScreen from './screens/NakamasScreen'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Monkey" component={MonkeyScreen}/>
        <Stack.Screen  name="Nakama" component={NakamasScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}


