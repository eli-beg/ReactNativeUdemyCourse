import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {signOut, authState} = useContext(AuthContext);
  return (
    <View>
      <Text>AlbumsScreen</Text>
      {authState.isLoggedIn && <Button title="SignOut" onPress={signOut} />}
    </View>
  );
};
