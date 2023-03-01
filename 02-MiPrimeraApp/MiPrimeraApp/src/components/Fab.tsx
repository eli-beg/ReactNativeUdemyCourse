import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native/';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <View
      style={[style.fabLocation, position === 'bl' ? style.left : style.right]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('grey', false, 30)}>
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const style = StyleSheet.create({
  fabLocation: {
    bottom: 25,
    position: 'absolute',
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: 'pink',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fabText: {
    bottom: 2,
    right: 2,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
