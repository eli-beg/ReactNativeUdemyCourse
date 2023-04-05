import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';

const HomeScreen = () => {
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
          ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
          ItemSeparatorComponent={() => itemSeparator()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
