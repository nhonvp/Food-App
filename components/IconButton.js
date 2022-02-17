import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';

const IconButton = ({containerStyle,icon,iconStyle,onpress}) =>{
    return (
        <TouchableOpacity
         style = {{
             ...containerStyle
         }}
         onPress = {onpress}
        >
         <Image
         source={icon}
         style = {{
             width : 30,
             height : 30,
             tintColor : COLORS.white,
            ...iconStyle
         }}
         />
        </TouchableOpacity>
    )
}

export default IconButton;