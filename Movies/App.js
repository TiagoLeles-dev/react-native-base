/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.centerContainer}>
      <Text style={styles.sectionTitle}>Hello World!</Text>
      <Text>Edit teh App.js file to see some changes here</Text>
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
