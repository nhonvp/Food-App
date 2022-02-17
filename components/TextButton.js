import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import TextIconButton from './TextIconButton';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';


const TextButton = ({
    label,
    label2,
    labelStyle,
    label2Style,
    buttonCointainerStyle,
    disabled,
    onpress,
  }) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
          ...buttonCointainerStyle,
        }}
        disabled={disabled}
        onPress={onpress}>
        <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
          {label}
        </Text>

        {
          label2 != "" && 
          <Text
           style ={{
             flex :1,
             textAlign : "right",
             color : COLORS.white,
             ...FONTS.h3,
             ...label2Style
           }}
          >
          {label2}
          </Text>
        }
      </TouchableOpacity>
    );
  };

export default TextButton;

