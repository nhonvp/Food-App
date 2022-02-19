import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const RadioButton = ({
    cointainerStyle,
    label,
    labelStyle,
    iconStyle,
    isSelected,
    onpress
}) => {
    return(
        <TouchableOpacity
         style={{
             flexDirection : "row",
             alignItems : "center",
             justifyContent : "center",
             ...cointainerStyle
         }}
         onPress = {onpress}
        >
        <Image
         source = {isSelected ? icons.check_on : icons.check_off}
         style = {{
             width : 20,
             height : 20,
             marginLeft : 5,
             ...iconStyle
         }}
        />

        <Text style={{
            marginLeft : SIZES.radius,
            color : COLORS.gray,
            ...FONTS.body3,
            ...labelStyle
        }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default RadioButton;