import React, { useState } from 'react';
import { View, Image, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ImageGallery = ({ images }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
        style={styles.gallery}
      />
      {selectedImage && (
        <Modal visible={modalVisible} transparent={true} onRequestClose={closeModal}>
          <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
            <Image source={selectedImage} style={styles.modalImage} />
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gallery: {
    marginVertical: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
});

export default ImageGallery;
