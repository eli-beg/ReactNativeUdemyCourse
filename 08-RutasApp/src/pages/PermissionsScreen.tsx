import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {request, PERMISSIONS, PermissionStatus} from 'react-native-permissions';

export const PermissionsScreen = () => {
  const checkLocationPermission = async () => {
    let permissionStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }

    console.log(permissionStatus);
  };

  return (
    <View style={styles.container}>
      <Text>PERMISSIONS SCREEN</Text>

      <Button title="Permission" onPress={checkLocationPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
