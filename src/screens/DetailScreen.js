import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import ImageGallery from '../components/ImageGallery';
import AccordionSection from '../components/AccordionSection';

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  const galleryImages = [
    require('../../assets/images/gallery/sprl.jpg'),
    require('../../assets/images/gallery/sprl.jpg'),
    require('../../assets/images/gallery/sprl.jpg'),
    // Agrega más imágenes según sea necesario
  ];

  const handleWhatsAppPress = () => {
    const phoneNumber = '+593980228166'; // Reemplaza con tu número de WhatsApp
    const message = 'Hola, me gustaría obtener más información.';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch((err) =>
      console.error("Error al abrir WhatsApp:", err)
    );
  };


return (
    <ScrollView style={styles.container}>
      <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.datos}>{item.datos}</Text>
      
      <AccordionSection title="Objetivo" content={item.objetivo} />
      <AccordionSection title="Malla" content={item.malla}></AccordionSection>
      <Text style={styles.datos}>Galería</Text>
      <ImageGallery images={galleryImages} />

      <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsAppPress}>
        <Text style={styles.whatsappButtonText}>Iniciar chat por WhatsApp</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  imageBackground: {
    width: '100%',
    height: 300,
    marginBottom: 16,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  image: {
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(63, 81, 181, 0.6)', // Primary color with 60% opacity
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color for better contrast
  },
  datos: {
    fontSize: 16,
    color: '#757575', // Secondary text color
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  whatsappButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default DetailScreen;