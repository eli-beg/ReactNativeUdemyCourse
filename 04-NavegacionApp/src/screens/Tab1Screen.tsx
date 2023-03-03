import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import {TouchableIcon} from '../components/TouchableIcon';
import {styles} from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('hola tab1!');
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="attach-outline" />
      <TouchableIcon iconName="bonfire-outline" />
    </View>
  );
};
