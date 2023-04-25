import React, {useContext} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',

      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',

      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        ...styles.globalMargin,
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={stylesSection.footer}>
            <HeaderTitle title={'Total de casas: ' + casas.length} />
          </View>
        )}
        stickySectionHeadersEnabled={true}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        renderSectionHeader={({section}) => (
          <View
            style={{
              ...stylesSection.header,
              backgroundColor: colors.background,
            }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <View
            style={{
              ...stylesSection.footer,
              backgroundColor: colors.background,
            }}>
            <HeaderTitle title={'Total: ' + section.data.length} />
          </View>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const stylesSection = StyleSheet.create({
  header: {
    paddingVertical: 5,
  },
  footer: {
    marginBottom: 70,
    paddingVertical: 5,
  },
});
