import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {MovieCard} from '../components/MovieCard';

const movieData = {
  title: 'The Super Mario Bros. Movie',
  image: 'https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  details:
    'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
};

export const HomeScreen = () => {
  return (
    <View style={styles.centerContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.centerContainer}>
        <Text style={styles.sectionTitle}>Hello World!</Text>
        <Text>Edit teh App.js file to see some changes here</Text>
        <MovieCard movie={movieData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 10,
  },
});
