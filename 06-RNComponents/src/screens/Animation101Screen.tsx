import React from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMoving} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="fadeIn"
        onPress={() => {
          fadeIn();
          startMoving(-100);
        }}
      />
      <Button title="fadeOut" onPress={() => fadeOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
