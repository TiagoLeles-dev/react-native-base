import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {storageAsync} from '../service/Storage';

export const MovieCard = ({movie}) => {
  const {title, image, details, overview, poster_path} = movie;
  const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`;
  const movieKey = `${movie.id}`;

  const [isFavorite, setIsFavorite] = useState(false);
  const iconName = isFavorite ? 'favorite' : 'favorite-outline';

  useEffect(() => {
    //Initial check for preveius favorite save
    const checkOnStore = async () => {
      let isThisMovieOnFavorite = await storageAsync.getItem(movieKey, false);
      setIsFavorite(isThisMovieOnFavorite);
    };

    checkOnStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFavoriteAction = async () => {
    await storageAsync.setItem(movieKey, !isFavorite);
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image || imagePath,
        }}
      />
      <View style={styles.Viewtitle}>
        <View style={styles.titleViewLine}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={handleFavoriteAction}>
            <MaterialIcons name={iconName} color={'blue'} size={25} />
          </TouchableOpacity>
        </View>
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
  titleViewLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
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
