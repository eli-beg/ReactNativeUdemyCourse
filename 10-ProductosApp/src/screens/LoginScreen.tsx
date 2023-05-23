import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';

import {loginStyles} from '../theme/loginTheme';

export const LoginScreen = () => {
  return (
    <>
      {/* Background */}

      <Background />
      <WhiteLogo />
      <Text style={loginStyles.title}>Login</Text>
      <Text style={loginStyles.label}>Email:</Text>
      <TextInput
        placeholder="Ingrese su email"
        placeholderTextColor={'rgba(255,255,255,0.6)'}
        keyboardType="email-address"
      />
      {/* Keyboard avoid view */}
    </>
  );
};
