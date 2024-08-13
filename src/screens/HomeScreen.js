import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { View, FlatList, StyleSheet, TextInput, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { db } from '../../firebase';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [carreras, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'carreras'));
        const itemsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsList);
        setFilteredItems(itemsList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredItems(carreras);
    } else {
      const filteredData = carreras.filter(item => 
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(filteredData);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchText}
        onChangeText={handleSearch}
      />
      </View>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchInput: {
    height: 40,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
  },
  itemContainer: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});


export default HomeScreen;
