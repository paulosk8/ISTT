import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AccordionSection = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.content}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    padding: 16,
    backgroundColor: '#3F51B5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    padding: 16,
    backgroundColor: '#C5CAE9',
    borderTopWidth: 1,
    borderTopColor: '#BDBDBD',
  },
  contentText: {
    fontSize: 16,
    color: '#212121',
  },
});

export default AccordionSection;
