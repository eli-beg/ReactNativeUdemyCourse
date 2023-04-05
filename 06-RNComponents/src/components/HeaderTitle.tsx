import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  return (
    <View style={{marginTop: 10, marginBottom: 10}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
