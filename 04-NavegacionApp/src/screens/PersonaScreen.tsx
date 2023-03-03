import React, {useEffect, useContext} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

// interface RouterParams{
//     id: number,
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  //   const params = route.params as RouterParams;

  const {changeUser} = useContext(AuthContext);
  const params = route.params;
  console.log(params);
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUser(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
