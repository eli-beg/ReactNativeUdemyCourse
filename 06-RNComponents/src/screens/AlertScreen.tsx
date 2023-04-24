import React, {useContext} from 'react';
import {View, Button, Alert} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const AlertScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const showAlert = () => {
    Alert.alert('titulo', 'mensaje', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel pressed'),
      },
      {text: 'Ok', onPress: () => console.log('Ok pressed')},
    ]);
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert Screen" />
      <Button
        title="Mostrar Alerta"
        color={colors.primary}
        onPress={showAlert}
      />
    </View>
  );
};
