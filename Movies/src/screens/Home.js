import React from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {MovieCard} from '../components/MovieCard';
import {ScrollView} from 'react-native-gesture-handler';

const moviesArr = [
  {
    title: 'The Super Mario Bros. Movie',
    image:
      'https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    details:
      'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
  },
  {
    title: 'Fast X',
    image:
      'https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
    details: `Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.`,
  },
  {
    title: 'The Super Mario Bros. Movie',
    image:
      'https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    details:
      'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
  },
  {
    title: 'Ant-Man and the Wasp: Quantumania',
    image:
      'https://image.tmdb.org/t/p/original/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg',
    details: `Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.`,
  },
];

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.sectionTitle}>Popular Movies</Text>
            {moviesArr.map(movie => (
              <MovieCard movie={movie} />
            ))}
            <Button
              title="Navigate"
              style={styles.button}
              onPress={() => navigation.navigate('NavigationDetails')}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  scrollView: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 10,
    alignSelf: 'center',
  },
  button: {
    marginTop: 20,
  },
});
