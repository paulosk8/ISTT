import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menú principal' }}/>
        <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Información' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;