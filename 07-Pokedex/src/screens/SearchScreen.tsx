import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.container, marginTop: top + 10}}>
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},
});
