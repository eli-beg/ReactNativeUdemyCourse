import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      {/* <Button
        title="Ir a Persona"
        onPress={() => navigation.navigate('Persona')}
      /> */}
      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: 'pink'}}
          onPress={() =>
            navigation.navigate('Persona', {id: 1, nombre: 'Pedro'})
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('Persona', {id: 2, nombre: 'Maria'})
          }>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
