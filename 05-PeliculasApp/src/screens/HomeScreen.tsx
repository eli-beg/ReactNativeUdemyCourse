import React, {useContext, useEffect} from 'react';
// import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, View, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {Dimensions} from 'react-native';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  //   const navigation = useNavigation();

  const {nowPlayingMovies, isLoading, popularMovies, topRated} = useMovies();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlayingMovies[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlayingMovies.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlayingMovies]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
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
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* Peliculas Populares */}

          <HorizontalSlider title="Popular" movies={popularMovies} />

          <HorizontalSlider title="Top Rated" movies={topRated} />

          <HorizontalSlider title="Upcoming" movies={nowPlayingMovies} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
