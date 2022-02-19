import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image,ScrollView} from 'react-native';
import Header from '../../components/Header';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CardItem from '../../components/CardItem';
import FormInPut from '../../components/FormInput';
import FooterTotal from '../../components/FooterTotal';

const Checkout = ({navigation, route}) => {
  const {selectedCard} = route.params;
  const [isSelectedCard, setisSelectedCard] = useState('');

  const renderMycards = () => {
    return (
      <View>
        {selectedCard &&
          dummyData.myCards.map((item, index) => {
            return (
              <CardItem
                item={item}
                key={item.id}
                isSelected={isSelectedCard == item.id + 'MyCard'}
                onpress={() => {
                  setisSelectedCard(item.id + 'MyCard');
                }}
              />
            );
          })}
      </View>
    );
  };

  const renderDeliveryAddres = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.h3,
            fontWeight: '700',
          }}>
          Delivery Address
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.radius,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderWidth: 2,
            borderRadius: 12,
            borderColor: COLORS.lightGray2,
          }}>
          <Image
            source={icons.location1}
            style={{
              height: 40,
              width: 40,
            }}
          />

          <Text
            style={{
              marginLeft: 20,
              ...FONTS.h3,
            }}>
            300 Post Street San Franciso,CA
          </Text>
        </View>
      </View>
    );
  };

  const renderCoupon = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text style={{...FONTS.h3, fontWeight: '700'}}>Add Coupon</Text>

        <FormInPut
          inputStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: 'hidden',
          }}
          placeholder="Coupon Code"
          appendComponent={
            <View
              style={{
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
              }}>
              <Image
                source={icons.discount}
                resizeMode="center"
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </View>
          }
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header
        title="CHECKOUT"
        icon="back"
        isCard={true}
        navigation={navigation}
      />

      <ScrollView>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}>
        {renderMycards()}
        {renderDeliveryAddres()}
        {renderCoupon()}
      </KeyboardAwareScrollView>
      <View>
      <FooterTotal
        subtotal={37.97}
        shippingfee={0.0}
        total={37.97}
        onpress={() => navigation.replace('Success')}
      />
      </View>
      </ScrollView>
    </View>
  );
};

export default Checkout;
