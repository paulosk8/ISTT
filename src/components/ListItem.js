import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },
  image: {
    resizeMode: 'contain',
    width: 120,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  description: {
    fontSize: 14,
    color: '#757575',
  },
});

export default ListItem;
