/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Header} from './src/components/Header';
import {MovieCard} from './src/components/MovieCard';

const movieData = {
  title: 'The Super Mario Bros. Movie',
  image: 'https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  details:
    'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
};

const App = () => {
  return (
    <SafeAreaView style={styles.centerContainer}>
      <Header />
      <View style={styles.centerContainer}>
        <Text style={styles.sectionTitle}>Hello World!</Text>
        <Text>Edit teh App.js file to see some changes here</Text>
        <MovieCard movie={movieData} />
      </View>
    </SafeAreaView>
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

export default App;
