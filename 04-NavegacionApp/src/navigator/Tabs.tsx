import React from 'react';
import {useTheme} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import StackNavigator from './StackNavigator';
import {colores} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTab';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 2,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'tab1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';
  return (
    <BottomTabAndroid.Navigator
      shifting={true}
      barStyle={{
        backgroundColor: 'orange',
      }}
      labeled={false}
      // sceneAnimationEnabled={true}
      screenOptions={{
        tabBarColor: 'green',
      }}>
      <BottomTabAndroid.Group
        screenOptions={({route}) => ({
          tabBarIcon: ({color, focused}) => {
            let iconName = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'planet-outline';
                break;
              case 'Tab2Screen':
                iconName = 'settings-outline';
                break;
              case 'StackNavigator':
                iconName = 'share-social-outline';
                break;
            }
            return (
              <Icon
                name={iconName}
                size={30}
                color="#900"
                style={{height: 60}}
              />
            );
          },
        })}>
        <BottomTabAndroid.Screen
          name="Tab1Screen"
          // options={{title: 'tab1'}}
          component={Tab1Screen}
        />
        <BottomTabAndroid.Screen
          name="Tab2Screen"
          // options={{title: 'tab2'}}
          component={TopTabNavigator}
        />
        <BottomTabAndroid.Screen
          name="StackNavigator"
          // options={{title: 'stack'}}
          component={StackNavigator}
        />
      </BottomTabAndroid.Group>
    </BottomTabAndroid.Navigator>
  );
};
