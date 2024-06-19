import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from '../screens/MenuScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsSreen from '../screens/DetailsSreen';
// Stack
const Stack = createNativeStackNavigator();
function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MenuScreen' component={MenuScreen}/>
      <Stack.Screen name='DetailsSreen' component={DetailsSreen}/>
    </Stack.Navigator>
  )
}

export default function NavigationStack() {
  return (
    <NavigationContainer>
        <MenuScreen/>
    </NavigationContainer>
  )
}