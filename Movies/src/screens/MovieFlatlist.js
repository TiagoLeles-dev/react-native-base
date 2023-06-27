import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useState, useMemo} from 'react';
import {MovieCard} from '../components/MovieCard';
import moviesJson from '../service/popular_movies_response.json';

const MovieFlatlist = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [dataList, setDataList] = useState([]);

  useMemo(() => {
    //Fetch Data from server or API
    setTimeout(() => {
      let list = moviesJson.data.results;
      setDataList(list);
    }, 1500);
  }, []);

  const fetchDataAction = async () => {
    setRefreshing(true);
    let newData = [];

    setTimeout(() => {
      newData = moviesJson.data.results;
    }, 1500);

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
