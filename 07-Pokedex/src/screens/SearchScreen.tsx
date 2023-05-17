import React from 'react';
import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const screenWidth = Dimensions.get('window').width;

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        ...stylesSearch.container,
      }}>
      <SearchInput
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          marginTop: 10,
        }}
      />

      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        //header component
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
              paddingTop: 10,
              marginTop: top + 50,
            }}>
            Pokedex
          </Text>
        }
      />
    </View>
  );
};

const stylesSearch = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},
});
