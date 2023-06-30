import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieFlatlist from '../screens/MovieFlatlist';
import {HomeScreen} from '../screens/Home';
import Examples from '../screens/Examples';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={MovieFlatlist}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MaterialCommunityIcons
                name={'movie-open'}
                size={22}
                color={'blue'}
              />
            ) : (
              <MaterialCommunityIcons
                name={'movie-open-outline'}
                size={18}
                color={'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Examples"
        component={Examples}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MaterialCommunityIcons
                name={'application-brackets'}
                size={22}
                color={'blue'}
              />
            ) : (
              <MaterialCommunityIcons
                name={'application-brackets-outline'}
                size={18}
                color={'gray'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
