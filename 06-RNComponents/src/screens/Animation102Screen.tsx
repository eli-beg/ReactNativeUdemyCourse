import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.greenBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  greenBox: {
    backgroundColor: 'green',
    width: 150,
    height: 150,
  },
});
