import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants';

const TextIconButton = ({
    cointainerStyle,
    label,labelStyle,
    icon,iconPosition,
    iconStyle,
    onpress
}) =>{
    return (
        <TouchableOpacity
         style= {{
             flexDirection : "row",
             alignItems : "center",
             justifyContent : "center",
             ...cointainerStyle
         }}
         onPress= {onpress}
        >
        {
            iconPosition =="LEFT" && 
            <Image
                source={icon}
                style={{
                    marginLeft : 5,
                    width : 20,
                    height : 20,
                    tintColor : COLORS.black,
                    ...iconStyle
                }}
            /> 
        }
            <Text
                style={{
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
            {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextIconButton;