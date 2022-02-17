import {View, Text, Platform} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES} from '../constants';
import TextButton from '../components/TextButton';

const FooterTotal = ({subtotal, shippingfee, total, onpress}) => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, 'black']}
        style={{
          position: 'absolute',
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />

      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              flex: 1,
              ...FONTS.body3,
            }}>
            Subtotal
          </Text>

          <Text style={{...FONTS.h3, fontWeight: 'bold'}}>
            ${subtotal.toFixed(2)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            marginBottom: SIZES.padding,
          }}>
          <Text
            style={{
              flex: 1,
              ...FONTS.body3,
            }}>
            Shopping Fee
          </Text>

          <Text style={{...FONTS.h3, fontWeight: 'bold'}}>
            ${shippingfee.toFixed(2)}
          </Text>
        </View>

        <View
          style={{
            height: 2,
            width: '100%',
            backgroundColor: COLORS.lightGray2,
            paddingHorizontal: SIZES.padding,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            marginBottom: SIZES.padding,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Total :
          </Text>

          <Text style={{...FONTS.h3, fontWeight: 'bold', fontSize: 18}}>
            ${total.toFixed(2)}
          </Text>
        </View>

        <TextButton
          label="Place your Order"
          buttonCointainerStyle={{
            height: 60,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            marginTop: SIZES.padding,
          }}
          onpress={onpress}
          labelStyle = {{
              marginTop : 15
        }}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
