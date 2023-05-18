import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [term, setTerm] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      setPokemonFiltered([]);
    }
    if (isNaN(Number(term))) {
      const pokeFiltered = simplePokemonList.filter(poke =>
        poke.name.toLowerCase().includes(term.toLowerCase()),
      );
      setPokemonFiltered(pokeFiltered);
    } else {
      const pokeFilteredById = simplePokemonList.find(poke => poke.id === term);
      setPokemonFiltered(pokeFilteredById ? [pokeFilteredById] : []);
    }
  }, [simplePokemonList, term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        ...stylesSearch.container,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          ...stylesSearch.searchInput,
          width: screenWidth - 40,
        }}
      />

      <FlatList
        data={pokemonFiltered}
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
            {term}
          </Text>
        }
      />
    </View>
  );
};

const stylesSearch = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},
  searchInput: {
    position: 'absolute',
    zIndex: 999,
    marginTop: 10,
  },
});
