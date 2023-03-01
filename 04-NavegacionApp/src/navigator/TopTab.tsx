import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarAndroidRipple: {borderless: false},
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarIcon: ({color}) => {
          let iconName = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'Ch';
              break;
            case 'AlbumsScreen':
              iconName = 'Al';
              break;
            case 'ContactsScreen':
              iconName = 'Co';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
