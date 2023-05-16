import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigation from './Navigation';
import {SearchScreen} from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderWidth: 0,
          elevation: 0,
          height: 60,
          position: 'absolute',
        },
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {marginBottom: 10},
      }}
      // sceneContainerStyle={{
      //   backgroundColor: 'red',
      // }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Navigation}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
