import React, {useContext} from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMoving} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={stylesAnimation.container}>
      <Animated.View
        style={{
          ...stylesAnimation.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <View style={{marginVertical: 10}}>
        <Button
          title="fadeIn"
          color={colors.primary}
          onPress={() => {
            fadeIn();
            startMoving(-100);
          }}
        />
      </View>
      <View>
        <Button
          title="fadeOut"
          color={colors.primary}
          onPress={() => fadeOut()}
        />
      </View>
    </View>
  );
};

const stylesAnimation = StyleSheet.create({
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
