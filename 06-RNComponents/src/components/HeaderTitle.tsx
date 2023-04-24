import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{marginTop: 10, marginBottom: 10}}>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};
