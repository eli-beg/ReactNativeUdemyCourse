import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    // Animated.timing(top, {
    //   toValue: -100,
    //   duration: 1000,
    //   useNativeDriver: true,
    //   easing: Easing.bounce,
    // }).start();
  };

  const startMoving = (initPosition: number, duration: number = 1000) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      // easing: Easing.bounce,
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
    startMoving,
    position,
  };
};
