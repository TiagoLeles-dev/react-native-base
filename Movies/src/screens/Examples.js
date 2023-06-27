import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

function Examples({navigation}) {
  const list = [
    {
      title: 'Home map list',
      navigationPath: 'Home',
    },
    {
      title: 'Navigate',
      navigationPath: 'NavigationDetails',
    },
    {
      title: 'Flatlist Example',
      navigationPath: 'MovieFlatlist',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Examples</Text>
      {list.map(({title, navigationPath}) => {
        return (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(navigationPath)}>
            <Text style={styles.textButton}>{title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default Examples;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'darkblue',
    borderBottomColor: 'purple',
    borderBottomWidth: 1,
    borderRadius: 15,
  },
  textButton: {
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 10,
    alignSelf: 'center',
  },
});
