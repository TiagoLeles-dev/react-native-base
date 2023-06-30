import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useState, useMemo} from 'react';
import {MovieCard} from '../components/MovieCard';
import moviesJson from '../service/popular_movies_response.json';
import fetchPopularMovies from '../service/MovieService';
import getDisplayDate from '../utils/DateUtils';

const MovieFlatlist = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const [dataList, setDataList] = useState([]);

  const text = dataFetched
    ? `New Data fetched from server on \n ${getDisplayDate(new Date())}`
    : `This list is from a internal Json. \n To update from server data drag down the screen`;

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
      setDataFetched(true);
    }

    setRefreshing(false);
    return newData;
  };

  const renderItem = ({item}) => <MovieCard movie={item} />;
  const renderHeader = () => {
    return <Text style={styles.textHeader}>{text}</Text>;
  };

  return (
    <View>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
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
  textHeader: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 10,
    paddingHorizontal: 45,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 10,
    alignSelf: 'center',
  },
});
