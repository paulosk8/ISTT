import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SplashScreen from '../screens/SplashScreen';
import AdmissionScreen from '../screens/AdmissionScreen';
import InfoScreen from '../screens/InfoScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: true }}>
    <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Carreras"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Carreras') {
              iconName = 'school';
            } else if (route.name === 'Admisión') {
              iconName = 'how-to-reg';
            } else if (route.name === 'Información') {
              iconName = 'info';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3F51B5', // Primary color
          inactiveTintColor: '#757575', // Secondary text color
        }}
      >
        <Tab.Screen name="Carreras" component={HomeStack} />
        <Tab.Screen name="Admisión" component={AdmissionScreen} />
        <Tab.Screen name="Información" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

/* const AppNavigator = () => {
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
}; */

export default AppNavigator;
