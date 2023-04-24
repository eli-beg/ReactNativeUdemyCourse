import React, {useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Texts Inputs" />
          <TextInput
            autoCapitalize="words"
            placeholder="Ingrese su nombre"
            placeholderTextColor={colors.text}
            cursorColor={colors.text}
            style={{
              ...stylesScreen.inputStyle,
              borderColor: colors.border,
              color: colors.primary,
            }}
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Ingrese su correo"
            placeholderTextColor={colors.text}
            cursorColor={colors.text}
            style={{
              ...stylesScreen.inputStyle,
              borderColor: colors.border,
              color: colors.primary,
            }}
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address" // para agregar el @ en el teclado
          />
          <View style={stylesScreen.switchRow}>
            <Text style={{...stylesScreen.switchText, color: colors.text}}>
              Suscribirme
            </Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <TextInput
            placeholder="Ingrese su telefono"
            placeholderTextColor={colors.text}
            cursorColor={colors.text}
            style={{
              ...stylesScreen.inputStyle,
              borderColor: colors.border,
              color: colors.primary,
            }}
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  switchText: {
    fontSize: 20,
  },
});
