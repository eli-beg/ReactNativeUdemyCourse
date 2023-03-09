import React from 'react';
// import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {Dimensions} from 'react-native';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  //   const navigation = useNavigation();

  const {nowPlayingMovies, isLoading, popularMovies, topRated} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        {/* <MoviePoster movie={nowPlayingMovies[0]} /> */}

        {/* Carousel Principal */}
        <View
          style={{
            height: 440,
          }}>
          <Carousel
            data={nowPlayingMovies}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* Peliculas Populares */}

        <HorizontalSlider title="Popular" movies={popularMovies} />

        <HorizontalSlider title="Top Rated" movies={topRated} />

        <HorizontalSlider title="Upcoming" movies={nowPlayingMovies} />
      </View>
    </ScrollView>
  );
};
