import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { db } from '../../firebase';  // Ajusta la ruta según tu proyecto
import ProcessStage from '../components/ProcessStage';

const AdmissionScreen = () => {
  const [etapas, setEtapas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'etapas'));
        const etapasList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Número de etapas:', etapasList.length); // Verificar cantidad de etapas
        setEtapas(etapasList);
      } catch (error) {
        console.error("Error fetching etapas: ", error);
      }
    };

    fetchData();
  }, []);

  const renderProcessStage = ({ item, index }) => (
    <ProcessStage etapa={item} index={index} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={etapas}
        keyExtractor={(item) => item.id}
        renderItem={renderProcessStage}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: 20,
  },
});

export default AdmissionScreen;
