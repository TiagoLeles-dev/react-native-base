import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useState, useMemo} from 'react';
import {MovieCard} from '../components/MovieCard';
import moviesJson from '../service/popular_movies_response.json';
import fetchPopularMovies from '../service/MovieService';
import {storage} from '../service/Storage';

const MovieFlatlist = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [dataList, setDataList] = useState([]);

  const saveDataLocaly = async () => {
    //saving the movie data using the title as key
    await storage.storeData(dataList[0].title, dataList[0]);
  };

  const getDataLocaly = async key => {
    //saving the movie data using the title as key
    let data = await storage.getData(key);
    console.log('stored data retrived:', data);
  };

  //OBS: Using the list from one internal json file.
  useMemo(() => {
    setTimeout(() => {
      let list = moviesJson.data.results;
      setDataList(list);
    }, 1500);
  }, []);

  const fetchDataAction = async () => {
    setRefreshing(true);
    let newData = [];

    //Fetch Data from server or API
    let response = await fetchPopularMovies();
    if (response.results) {
      setDataList(response.results);
    }

    setRefreshing(false);
    return newData;
  };

  const renderItem = ({item}) => <MovieCard movie={item} />;

  return (
    <View>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        ListFooterComponent={<View style={styles.footer} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchDataAction} />
        }
      />
    </View>
  );
};

export default MovieFlatlist;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
  footer: {
    height: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 10,
    alignSelf: 'center',
  },
});
