import React from 'react';
import {FlatList} from 'react-native';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {MenuItem} from '../interfaces/appInterfaces';
import {FlatListMenuItem} from '../components/FlatListMenuItem';

interface Props {
  menuItem: MenuItem;
}

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'cube-outline',
    components: 'Animation102Screen',
  },
  {
    name: 'Animation 103',
    icon: 'cube-outline',
    components: 'Animation103Screen',
  },
];

const HomeScreen = () => {
  const renderListHeader = () => {
    return (
      <View style={{marginTop: 10, marginBottom: 10}}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };
  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 5,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <View style={styles.globalMargin}>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
          keyExtractor={item => item.name}
          ListHeaderComponent={() => renderListHeader()}
          ItemSeparatorComponent={() => itemSeparator()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
