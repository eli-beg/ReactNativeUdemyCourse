import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      {/* Types */}
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{...styles.regularText, marginRight: 10}}>
              {type.name}
            </Text>
          ))}
        </View>
        {/* Peso */}

        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight}Kg</Text>
      </View>

      {/* Sprites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
          source={{uri: pokemon.sprites.front_default}}
          style={styles.basicSprite}
        />
        <Image
          source={{uri: pokemon.sprites.back_default}}
          style={styles.basicSprite}
        />
        <Image
          source={{uri: pokemon.sprites.front_shiny}}
          style={styles.basicSprite}
        />
        <Image
          source={{uri: pokemon.sprites.back_shiny}}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* abilities */}
      <View style={styles.container}>
        <Text style={styles.title}>First Skills</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{...styles.regularText, marginRight: 10}}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Moves */}
      <View style={styles.container}>
        <Text style={styles.title}>Movess</Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              key={move.name}
              style={{...styles.regularText, marginRight: 10}}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 17,
  },
  basicSprite: {
    width: 150,
    height: 100,
  },
});
