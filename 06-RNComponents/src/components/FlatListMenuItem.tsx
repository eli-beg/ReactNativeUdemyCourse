import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}
export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(menuItem.component as never)}
      activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="grey" size={19} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="grey" size={19} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
