import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/Entypo';
import {icons, constants, dummyData, images, theme} from '../constants';
import {Header as HeaderRNE} from 'react-native-elements';
import CartQuantityButton from './CartQuantityButton';

export default function Header({navigation,title,icon,images,hiddenright,isHome,isFoodDetail,isCard,onpress}) {
  return (
    <View
      style={{
        marginTop : 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "flex-start",
        width : '100%',
      }}>
      <View>
      <TouchableOpacity
        style={{
          marginLeft : 20,
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: COLORS.gray2,
          borderRadius: 12,
        }}
        onPress={()=>{
          navigation.goBack();
        }}
        >
        <Icon name={icon} size={24} />
      </TouchableOpacity>
      </View>
        <View style={{marginTop : 10}}>
          <Text style={{fontSize: 20,fontWeight : "600"}}>{title}</Text>
        </View>

       {isHome &&
        <TouchableOpacity
        style={{
         marginRight : 20,
        }}
       >
       <Image
       source={dummyData.myProfile.profile_image}
       style={{
         width: 40,
         height: 40,
         borderRadius : SIZES.radius
       }}
       />
       </TouchableOpacity>
      }

      {isFoodDetail &&
        <CartQuantityButton
        quantity={3}
        />
      }
      
      {
        isCard && 
        <View
         style={{
           marginRight : 50
         }}
        >
        
        </View>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
