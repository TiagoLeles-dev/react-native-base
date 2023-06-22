import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export function NavigationDetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Navigation Details Screen</Text>
      <Button
        title={
          'Try to go Details... \n not working using \n navigation.navigate'
        }
        onPress={() => navigation.navigate('NavigationDetails')}
      />
      <Button
        title={'Go to Details... again \n using navigation.push'}
        onPress={() => navigation.push('NavigationDetails')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 100,
  },
});
