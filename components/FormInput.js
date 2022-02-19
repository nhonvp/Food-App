import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const FormInPut = ({
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  maxlength,
  cointainerStyle
}) => {
  return (
    <View style={{
      ...cointainerStyle
    }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{label}</Text>
        <Text style={{color: COLORS.red, ...FONTS.h4}}>{errorMsg}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: 10,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputStyle

        }}>
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={text => {
            onChange(text);
          }}
        />
        {appendComponent}
      </View>
    </View>
  );
};
export default FormInPut;
