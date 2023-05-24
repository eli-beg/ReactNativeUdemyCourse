import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';

import {loginStyles} from '../theme/loginTheme';

export const LoginScreen = () => {
  return (
    <>
      {/* Background */}

      <Background />
      <View style={loginStyles.formContainer}>
        <WhiteLogo />
        <Text style={loginStyles.title}>Login</Text>
        <Text style={loginStyles.label}>Email:</Text>
        <TextInput
          placeholder="Ingrese su email"
          placeholderTextColor={'rgba(255,255,255,0.6)'}
          keyboardType="email-address"
          underlineColorAndroid={'rgba(255,255,255,0.6)'}
          style={loginStyles.inputField}
          selectionColor="white"
          autoCapitalize="none"
          autoCorrect={false}

          // onChange=
          // value=
        />

        <Text style={loginStyles.label}>Contaserña:</Text>
        <TextInput
          placeholder="*******"
          placeholderTextColor={'rgba(255,255,255,0.6)'}
          underlineColorAndroid={'rgba(255,255,255,0.6)'}
          style={loginStyles.inputField}
          selectionColor="white"
          autoCapitalize="none"
          autoCorrect={false}

          // onChange=
          // value=
        />
        {/* Boton Login */}

        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Crear una nueva cuenta */}

        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('onpress')}>
            <Text style={loginStyles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        {/* Keyboard avoid view */}
      </View>
    </>
  );
};
