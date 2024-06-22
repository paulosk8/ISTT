import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // Mostrar la splash screen por 3 segundos
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logos/istt.png')} style={styles.logo} />
      <Text style={styles.title}>Oferta académica ISTT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F51B5', // Primary color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 20,
    resizeMode: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
