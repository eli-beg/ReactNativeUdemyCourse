import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  menuItem: MenuItem;
}
export const FlatListMenuItem = ({menuItem}: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={menuItem.icon} color="grey" size={15} />
      <Text>
        {menuItem.name} - {menuItem.icon}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
