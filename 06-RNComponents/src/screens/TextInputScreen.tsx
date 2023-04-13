import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Texts Inputs" />
      <TextInput
        autoCapitalize="words"
        placeholder="Ingrese su nombre"
        style={stylesScreen.inputStyle}
        onChangeText={value => onChange(value, 'name')}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Ingrese su correo"
        style={stylesScreen.inputStyle}
        onChangeText={value => onChange(value, 'email')}
        keyboardType="email-address" // para agregar el @ en el teclado
      />
      <TextInput
        placeholder="Ingrese su telefono"
        style={stylesScreen.inputStyle}
        onChangeText={value => onChange(value, 'phone')}
        keyboardType="phone-pad"
      />
      <HeaderTitle title={JSON.stringify(form, null, 3)} />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
});
