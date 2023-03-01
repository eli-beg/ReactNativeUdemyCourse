import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Box Object Model</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    // backgroundColor: 'pink',
  },
  container: {
    backgroundColor: 'red',
  },
});
