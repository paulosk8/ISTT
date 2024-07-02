import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Dimensions } from 'react-native';
import ListItem from '../components/ListItem';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const items = [
    {
      id: 1,
      image: require('../../assets/images/logos/pgt.jpg'),
      title: 'Tecnólogo Superior en Planificación y Gestión del Tránsito',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 2,
      image: require('../../assets/images/logos/dii.jpeg'),
      title: 'Tecnólogo Superior en Desarrollo Infantil Integral',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 3,
      image: require('../../assets/images/logos/agroindustria.png'),
      title: 'Tecnólogo Superior en Agroindustria',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 4,
      image: require('../../assets/images/logos/electricidad.png'),
      title: 'Tecnólogo Superior en Electricidad',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 5,
      image: require('../../assets/images/logos/electronica.png'),
      title: 'Tecnólogo Superior en Electricidad',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 6,
      image: require('../../assets/images/logos/meci.png'),
      title: 'Tecnólogo Superior en Mantenimiento Electrico y Control Industrial',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 7,
      image: require('../../assets/images/logos/gastronomia.jpeg'),
      title: 'Tecnólogo Superior en Gatronimía',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 8,
      image: require('../../assets/images/logos/mecanica.jpeg'),
      title: 'Tecnólogo Superior en Mecánica',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 9,
      image: require('../../assets/images/logos/lyt.jpeg'),
      title: 'Tecnólogo Superior en Logística y Transporte',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 10,
      image: require('../../assets/images/logos/textil.jpeg'),
      title: 'Tecnólogo Superior en Logística y Transporte',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 11,
      image: require('../../assets/images/logos/sprl.jpeg'),
      title: 'Tecnólogo Superior en Logística y Transporte',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    {
      id: 12,
      image: require('../../assets/images/logos/agropecuaria.jpg'),
      title: 'Tecnólogo Superior en Logística y Transporte',
      datos: 'Titulo que otorga: Tecnólogo Superior en Planificación y Gestión del Tránsito\nDuración: 4 semestres (2 años)\nModalidad: Presencial\nSección: Vespertina - Nocturna\nHorarios: 14:00 - 18:00 (Vespertina); 18:20 - 22:20 (Nocturna)',
      objetivo: 'Formar profesionales con valores éticos y morales; capaces de planificar, gestionar y administrar la movilidad de personas y vehículos aplicando metodologías y procedimientos de acuerdos a normativas vigentes del servicio de tránsito, para garantizar la articulación vehicular al disminuir los tiempos de traslado y mejorar el espacio físico de los habitantes mediante el uso eficiente de la infraestructura vial integrando ejes transversales como seguridad, salud y medio ambiente a fin de responder eficientemente a la solución de problemas relacionados al tránsito en sus múltiples dimensiones.',
      malla: require('../../assets/images/logos/pgt.jpg'),
    },
    
    // Agrega más ítems según sea necesario
  ];

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(items);

  const handlePress = (item) => {
    navigation.navigate('Details', { item });
  };
  
  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = items.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(items);
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
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem item={item} onPress={handlePress} />
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light background color to highlight the shadows
/*     padding: 16, */
  },
  containerSearch: {
    /* backgroundColor: '#303F9F', */
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: SCREEN_WIDTH, // Deja espacio a los lados similar al paddingHorizontal
    alignSelf: 'center', // Centra el contenedor horizontalmente
  },
  searchInput: {
    height: 40,
    borderColor: '#3F51B5', // Divider color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    /* marginBottom: 16, */
    backgroundColor: '#fff',
  },
});


export default HomeScreen;
