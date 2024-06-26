import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ListItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
     <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
     </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH - 32,
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden', // Ensure child elements are clipped to the border radius
    alignSelf: 'center', // Centra el contenedor horizontalmente
    // Shadow for iOS
    shadowColor: '#3F51B5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },
  imageBackground: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end', // Align overlay at the bottom
  },
  image: {
    borderRadius: 8,
  },
  overlay: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
    padding: 10,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: '#FFFFFF', // White text color for better contrast
  },
});

export default ListItem;
