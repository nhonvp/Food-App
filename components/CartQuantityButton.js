import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants';

const CartQuantityButton = ({
    containerStyle, iconStyle, quantity, onpress
}) =>{
    return (
        <TouchableOpacity
         style={{
             marginRight : 20,
             width: 40, 
             height : 40,
             alignItems : "center",
             justifyContent : "center",
             backgroundColor :  COLORS.lightOrange2,
             borderRadius : SIZES.radius,
             ...containerStyle
         }}
        >
        <Image
        source={icons.cart}
        style ={{
            width : 20,
            height : 20,
            tintColor : COLORS.black,
            ...iconStyle
        }}
        />
        <View
         style={{
             position : "absolute",
             top : 5,
             right :5,
             backgroundColor :  COLORS.primary,
             height : 15,
             width : 15,
             justifyContent : "center",
             alignItems : "center",
             borderRadius : SIZES.radius,

         }}
        >
        <Text
        style={{
            color : COLORS.white,
            fontSize: 10
        }}
        >{quantity}</Text>
        </View>
        
        </TouchableOpacity>
    )
}

export default CartQuantityButton;