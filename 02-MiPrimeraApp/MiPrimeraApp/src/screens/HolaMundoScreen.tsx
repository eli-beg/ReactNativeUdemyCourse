import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Holisss
      </Text>
    </View>
  );
};
