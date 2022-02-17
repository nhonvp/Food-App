import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Header from '../../components/Header';
import IconLabel from '../../components/IconLabel';
import StepperInput from '../../components/StepperInput';
import TextButton from '../../components/TextButton';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../../constants';
const FoodDetail = ({navigation}) => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);
    const [selectedSize, setselectedSize] = useState("");
    const [rating, setrating] = useState(2);
    const [qty, setqty] = useState(1);
  const renderDetails = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,

        }}>
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
              paddingHorizontal: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={icons.calories}
                style={{
                  height: 30,
                  width: 30,
                }}
              />

              <Text
                style={{
                  color: COLORS.darkGray2,
                  ...FONTS.h4,
                }}>
                {foodItem.calories} calories
              </Text>
            </View>

            <Image
              source={icons.love}
              style={{
                height: 20,
                width: 20,
                tintColor: foodItem.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          <Image
            source={foodItem.image}
            resizeMode="contain"
            style={{
              height: 170,
              width: '100%',
            }}
          />
        </View>

        <View
          style={{
            marginTop: SIZES.padding,
          }}>
          <Text style={{...FONTS.h1, fontWeight: '800'}}>{foodItem.name}</Text>

          <Text
            style={{
              marginTop: 8,
              color: COLORS.darkGray,
              textAlign: 'justify',
              ...FONTS.body3,
            }}>
            {foodItem.description}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
          }}>
          <IconLabel
            containerStyle={{
              backgroundColor: COLORS.primary,
            }}
            icon={icons.star}
            label="4.5"
            labelStyle={{
              color: COLORS.white,
            }}
          />

          <IconLabel
            containerStyle={{
              marginLeft: 12,
              paddingHorizontal: 0,
            }}
            icon={icons.clock}
            label="30 Mins"
            labelStyle={{
                color: COLORS.black,
            }}
          />

          <IconLabel
            containerStyle={{
              marginLeft: 12,
            }}
            icon={icons.dollar}
            label="Free Shipping"
            labelStyle={{
                color: COLORS.black,
            }}
          />
        </View>
        
        <View
        style ={{
         flexDirection : "row",
         marginTop : 24,
         alignItems : "center"
        }}
       >
         <Text style ={{...FONTS.h3}}>Sizes:</Text>
        <View
         style={{
             flexWrap : "wrap",
             flexDirection : "row",
             marginLeft : SIZES.padding
         }}
        >
        {dummyData.sizes.map((item,index) => {
            return (
                <TextButton
                    key={index}
                    buttonCointainerStyle ={{
                        width : 55,
                        height : 55,
                        margin : 8,
                        borderWidth : 1,
                        borderRadius : SIZES.radius,
                        borderColor : selectedSize ==item.id ? COLORS.primary :COLORS.gray2,
                        backgroundColor : selectedSize== item.id ? COLORS.primary : null
                    }}
                    label= {item.label}
                    labelStyle = {{
                        color : COLORS.gray2,
                        ...FONTS.body2
                    }}
                    onpress={() => setselectedSize(item.id)}
                />
            )   
         })}
        </View>
       </View>

      </View>
    );
  };

  const  renderRestaurant = () =>{
      return (
          <View
           style ={{
               flexDirection : "row",
               marginVertical : SIZES.padding,
               paddingHorizontal : SIZES.padding,
               alignItems : "center"
           }}
          >
           <Image
           source={images.profile}
           style ={{
               width :50,
               height :50,
               borderRadius : SIZES.radius,
           }}
           />

           <View
            style ={{
                flex : 1,
                marginLeft : SIZES.radius,
                justifyContent : "center",
            }}
           >
           <Text style={{...FONTS.h3}}>By Programmers</Text>
           <Text style={{color : COLORS.gray, ...FONTS.body4}}>1.2 Km away from you </Text>
           </View>

           <View
            style ={{
                flexDirection : "row"
            }}
           >
            <Image
             source={icons.star}
             style ={{
                marginLeft : 3,
                 height : 15,
                 width : 15,
                 tintColor : rating >= 1 ? COLORS.primary : COLORS.lightOrange3
             }}
            />
            <Image
             source={icons.star}
             style ={{
                 marginLeft : 3,
                 height : 15,
                 width : 15,
                 tintColor : rating >= 2 ? COLORS.primary : COLORS.lightOrange3
             }}
            />
            <Image
             source={icons.star}
             style ={{
                height : 15,
                width : 15,
                marginLeft : 3,
            
                 tintColor : rating >= 3 ? COLORS.primary : COLORS.lightOrange3
             }}
            />
            <Image
             source={icons.star}
             style ={{
                marginLeft : 3,
                height : 15,
                width : 15,
                 tintColor : rating >= 4 ? COLORS.primary : COLORS.lightOrange3
             }}
            />
            <Image
             source={icons.star}
             style ={{
                marginLeft : 3,
                height : 15,
                width : 15,
                 tintColor : rating >= 5 ? COLORS.primary : COLORS.lightOrange3
             }}
            />
           </View>

          </View>
      )
  }

  const renderFooter = () =>{
      return (
          <View
           style ={{
               flexDirection :"row",
               height : 120,
               alignItems :"center",
               paddingHorizontal : SIZES.padding,
               paddingBottom : SIZES.padding
           }}
          >
          <StepperInput
          value={qty}
          onAdd = {() => setqty(qty +1)}
          OnMinus = {() => {
              if (qty >1) {
                  setqty(qty -1)
              }
          }}
          />

          <TextButton
            buttonCointainerStyle={{
                flex :1,
                flexDirection :"row",
                height :60,
                marginLeft : SIZES.radius,
                paddingHorizontal : SIZES.radius,
                borderRadius : SIZES.radius,
                backgroundColor : COLORS.primary
            }}
            label ="Buy Now"
            label2="$15.99"
            onpress={() => navigation.navigate('MyCart')}
          />
          </View>
      )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor : COLORS.white
      }}>
      <Header title="Details" icon="back" isFoodDetail= {true}/>

      <ScrollView>
      {renderDetails()}

      <View
       style ={{
           height : 2,
           width : "100%",
           backgroundColor : COLORS.lightGray2,
       }}
      >
      </View>
      {renderRestaurant()}
      
      {renderFooter()}
      </ScrollView>
    </View>
  );
};

export default FoodDetail;
