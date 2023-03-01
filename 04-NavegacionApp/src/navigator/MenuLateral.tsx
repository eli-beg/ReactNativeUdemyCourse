import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
// import StackNavigator from './StackNavigator';
import {View, Image, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png ',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Parte del Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon
            name="earth-outline"
            size={25}
            color="grey"
            style={{height: '100%', paddingRight: 10}}
          />
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon
            name="settings-outline"
            size={25}
            color="grey"
            style={{height: '100%', paddingRight: 10}}
          />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
