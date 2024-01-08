import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import LoginPage from '../Screen/LoginPage';


const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen
      name="LoginPage"
      component={LoginPage}
     options={{headerShown: false}}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    
  </Stack.Navigator>
  )
}