import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/Home';
import {NavigationDetailsScreen} from '../screens/NavDetails';
import MovieFlatlist from '../screens/MovieFlatlist';

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: 'darkblue',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="NavigationDetails"
        component={NavigationDetailsScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="MovieFlatlist"
        component={MovieFlatlist}
        options={{headerShown: true}}
      />
      {/* <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
