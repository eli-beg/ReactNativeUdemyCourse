import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ItemSeparator} from '../components/ItemSeparator';

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
  return (
    <View style={{...styles.globalMargin, flex: 1, backgroundColor: 'white'}}>
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
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => (
          <View style={stylesSection.header}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const stylesSection = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 5,
  },
  footer: {
    marginBottom: 70,
    backgroundColor: 'white',
    paddingVertical: 5,
  },
});
