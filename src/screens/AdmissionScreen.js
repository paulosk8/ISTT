import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdmissionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Admisión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light background color
  },
  text: {
    fontSize: 18,
    color: '#212121', // Primary text color
  },
});

export default AdmissionScreen;
