import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';

export default function VerticalFoodCard({containerStyle, imageStyle, item,onpress}) {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        alignItems: 'center',
        padding: SIZES.radius,
        borderRadius: 12,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
      onPress={onpress}
      >
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={icons.calories}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>
            {item.calories} Calories
          </Text>
        </View>
        <Image
          source={icons.love}
          style={{
            width: 30,
            height: 30,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>
    <View style={{
        height : 150,
        width : 150,
        justifyContent : "center",
        alignItems : "center"

    }}>
    <Image source={item.image} style={imageStyle} />
    </View>

    <View
    style ={{
        alignItems : "center",
    }}
    >
    <Text style={{...FONTS.h3, fontWeight : "700", fontSize : 18}}>{item.name}</Text>
    <Text style= {{
        color : COLORS.darkGray2, textAlign : "center",...FONTS.h5
    }}>
    {item.description}</Text>
    </View>
    </TouchableOpacity>
  );
}
