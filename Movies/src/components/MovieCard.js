import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const MovieCard = ({movie}) => {
  const {title, image, details, overview, poster_path} = movie;
  const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image || imagePath,
        }}
      />
      <View style={styles.Viewtitle}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={3} style={styles.text}>
          {details || overview}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 50,
    padding: 0,
    flexDirection: 'column',
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: 'rgba(238, 232, 244, 0.4)',
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: '700',
  },
  Viewtitle: {
    padding: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 150,
    maxHeight: 300,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
