import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProcessStage = ({ etapa, index }) => {
  const isCurrent = etapa.isCurrentStage; // Verifica si esta es la etapa actual
  return (
    <View style={[styles.stageContainer, isCurrent && styles.currentStage]}>
      <View style={[styles.circle, isCurrent && styles.currentCircle]}>
        <Text style={styles.circleText}>{index + 1}</Text>
      </View>
      <View style={[styles.stageContent, isCurrent && styles.currentContent]}>
        <Text style={styles.stageTitle}>{etapa.title}</Text>
        <Text style={styles.stageDescription}>{etapa.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  currentStage: {
    backgroundColor: '#FFEB3B', // Color de fondo diferente para la etapa actual
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  currentCircle: {
    backgroundColor: '#FFC107', // Círculo resaltado para la etapa actual
  },
  circleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stageContent: {
    flex: 1,
    backgroundColor: '#C5CAE9',
    padding: 20,
    borderRadius: 10,
  },
  currentContent: {
    backgroundColor: '#FFEB3B', // Fondo resaltado en la tarjeta de contenido
  },
  stageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303F9F',
  },
  stageDescription: {
    fontSize: 14,
    color: '#212121',
    marginTop: 5,
  },
});

export default ProcessStage;
