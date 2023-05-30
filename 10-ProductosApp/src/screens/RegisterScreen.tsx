import React, {useContext, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView, Keyboard, Alert} from 'react-native';
import {loginStyles} from '../theme/loginTheme';
import {WhiteLogo} from '../components/WhiteLogo';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useForm} from '../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {signUp, errorMessage, removeError} = useContext(AuthContext);
  const {nombre, correo, password, onChange} = useForm({
    nombre: '',
    correo: '',
    password: '',
  });
  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Login incorrecto', errorMessage, [
      {text: 'ok', onPress: removeError},
    ]);
  }, [errorMessage]);

  const onRegister = () => {
    console.log({nombre, correo, password});
    signUp({nombre, correo, password});
    // con esta funcion saca el teclado de la pantalla al apretar login
    Keyboard.dismiss();
  };
  return (
    <>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#5856D6'}}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Registro</Text>
          <Text style={loginStyles.label}>Nombre:</Text>
          <TextInput
            placeholder="Ingrese su nombre"
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            underlineColorAndroid={'rgba(255,255,255,0.6)'}
            style={loginStyles.inputField}
            selectionColor="white"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'nombre')}
            value={nombre}
            onSubmitEditing={onRegister}
          />

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
            onChangeText={value => onChange(value, 'correo')}
            value={correo}
            onSubmitEditing={onRegister}
          />

          <Text style={loginStyles.label}>Contraseña:</Text>
          <TextInput
            placeholder="*******"
            placeholderTextColor={'rgba(255,255,255,0.6)'}
            underlineColorAndroid={'rgba(255,255,255,0.6)'}
            style={loginStyles.inputField}
            secureTextEntry
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onRegister}
          />
          {/* Boton Login */}

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onRegister}>
              <Text style={loginStyles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              style={loginStyles.buttonReturn}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
