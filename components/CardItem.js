import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';


const CardItem = ({item,isSelected,onpress}) =>{
    return (
        <TouchableOpacity
        style={{
            flexDirection : "row",
            height : 100,
            alignItems : "center",
            marginTop : 12,
            paddingHorizontal : SIZES.padding,
            borderWidth : 2,
            borderRadius : 12,
            borderColor : isSelected ? COLORS.primary : COLORS.lightGray2
        }}
        onPress = {onpress}
        >
            <View
             style={{
                 width : 60,
                 height : 45,
                 alignItems : "center",
                 justifyContent: "center",
                 borderWidth : 2,
                 borderRadius : SIZES.radius,
                 borderColor : COLORS.lightGray2
             }}
            >
            <Image
             source={item.icon}
             resizeMode = "center"
             style = {{
                 width: 35,
                 height : 35
             }}
            />
            </View>

            <Text
             style={{
                 flex : 1,
                 marginLeft : SIZES.radius,
                 ...FONTS.h3,fontWeight : "700"
             }}
            >
            {item.name}
            </Text>

            <Image
            source={isSelected ? icons.check_on : icons.check_off}
            style={{
                width : 25,
                height: 25
            }}
            />
        </TouchableOpacity>
    )
}

export default CardItem;