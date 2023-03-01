import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 300,
    height: 300,
    backgroundColor: 'green',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'violet',
    position: 'absolute',
    right: 10,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
