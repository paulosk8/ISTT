import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openImageViewer = (imageUris, index) => {
    setImages(imageUris.map(uri => ({ url: uri })));
    setSelectedIndex(index);
    setVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={{ uri: item.image }} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Tītulo a obtener</Text>
        <Text style={styles.description}>{item.titleStudent}</Text>
        <Text style={styles.sectionTitle}>Horario</Text>
        <Text style={styles.description}>{item.horario}</Text>
        <Text style={styles.sectionTitle}>Modalidad</Text>
        <Text style={styles.description}>{item.modalidad}</Text>
        <Text style={styles.sectionTitle}>Sección</Text>
        <Text style={styles.description}>{item.seccion}</Text>

        <Text style={styles.sectionTitle}>Malla Curricular</Text>
        <TouchableOpacity onPress={() => openImageViewer([item.malla], 0)}>
          <Image source={{ uri: item.malla }} style={styles.mallaImage} />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Galería de Imágenes</Text>
        <FlatList
          data={item.gallery}
          keyExtractor={(imageUri, index) => index.toString()}
          horizontal
          renderItem={({ item: imageUri, index }) => (
            <TouchableOpacity onPress={() => openImageViewer(item.gallery, index)}>
              <Image source={{ uri: imageUri }} style={styles.galleryImage} />
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal visible={visible} transparent={true}>
        <ImageViewer
          imageUrls={images}
          index={selectedIndex}
          onSwipeDown={() => setVisible(false)}
          enableSwipeDown={true}
        />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  imageBackground: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#303F9F',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  detailsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#212121',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 20,
  },
  mallaImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
});

export default DetailScreen;
