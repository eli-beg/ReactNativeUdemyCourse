import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'violet',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    top: 50,
    borderColor: 'white',
    backgroundColor: 'orange',
  },
  cajaAzul: {
    width: 100,
    height: 100,

    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'blue',
  },
});
