import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';

export default function HorizonatalFoodCard({containerStyle,imageStyle, item}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle
      }}>
      <Image
        source={item.image}
        style={imageStyle}
      />

      <View style={{flex:1}}>
        <Text style={{fontSize: 18, ...FONTS.h3, fontWeight : "700"}}>{item.name}</Text>
        <Text style={{color: COLORS.darkGray2, ...FONTS.body4}}>
          {item.description}
        </Text>
        <Text style={{marginTop: SIZES.base, ...FONTS.h2}}>${item.price}</Text>
      </View>

      <View style={{
          flexDirection :"row",
          position:"absolute",
          top : 5,
          right :SIZES.radius
      }}>
      <Image
        source={icons.calories}
        style ={{
            height :30,
            width:30
        }}
      />
      <Text style={{color : COLORS.darkGray2,...FONTS.body5}}>{item.calories} Calories</Text>
      </View>
    </TouchableOpacity>
  );
}
