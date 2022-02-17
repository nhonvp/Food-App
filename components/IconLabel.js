import { View, Text,Image } from 'react-native'
import React from 'react'
import { FONTS, SIZES } from '../constants';

const IconLabel = ({containerStyle,icon, iconStyle, label,labelStyle}) =>{
    return (
        <View
            style={{
                flexDirection : "row",
                paddingVertical : 8,
                paddingHorizontal : 12,
                borderRadius : SIZES.radius,
                ...containerStyle
            }}
        >
        <Image
            source={icon}
            style={{
                width : 20,height: 20,
                ...iconStyle,
            }}
        />
        
        <Text
        style={{
            marginLeft : SIZES.base,
            ...labelStyle
        }}
        >{label}</Text>
        </View>
    )
}

export default IconLabel;