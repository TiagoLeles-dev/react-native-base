import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const Header = ({title = 'Home'}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'blue',
  },
  container: {
    minHeight: 40,
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'column',
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
});
