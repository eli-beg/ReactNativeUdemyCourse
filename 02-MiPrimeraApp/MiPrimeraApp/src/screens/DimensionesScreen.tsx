import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        {' '}
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: 600,
  },
  cajaMorada: {
    backgroundColor: 'violet',
    width: '20%',
    height: '20%',
  },
  cajaNaranja: {
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 30,
  },
});
