import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const LoadingSceen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={50} color="black" />
    </View>
  );
};
