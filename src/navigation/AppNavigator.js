import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: true }}>
        <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ 
          title: 'Menú principal',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#303F9F',
          },
          headerTitleStyle: {
            textAlign: 'left',
          }
          }}/>
        <Stack.Screen name="Details" component={DetailScreen} 
        options={{ 
          title: 'Información',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#303F9F',
          },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
