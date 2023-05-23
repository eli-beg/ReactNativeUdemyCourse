import React from 'react';
import {View, Text} from 'react-native';
import {WhiteLogo} from './WhiteLogo';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#5856D6',
        top: -250,
        width: 800,
        height: 1000,
        transform: [{rotate: '-70deg'}],
      }}></View>
  );
};
