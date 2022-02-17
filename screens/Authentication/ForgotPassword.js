import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import FormInPut from '../../components/FormInput';
import TextButton from '../../components/TextButton';
import utils from '../../Utils/utils';
import {COLORS, icons, SIZES, FONTS} from '../../constants';

const ForgotPassword = ({navigation}) => {
  const [email, setemail] = useState('');
  const [emailError, setemailError] = useState('');

  const isSendmail = () => {
      return email != "" && emailError =="";
  }
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo_02.png')}
          resizeMode="contain"
          style={{
            height: 100,
            width: 200,
          }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: SIZES.padding,
        }}>
        <View
          style={{
            marginTop: SIZES.padding,
          }}>
          <Text
            style={{
              ...FONTS.h2,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Password Recovery
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.darkGray,
              marginTop: SIZES.base,
            }}>
            Please enter your email address to recover your password
          </Text>
        </View>
      </View>

      <View
       style={{
           flex : 1,
           marginTop : SIZES.padding *2
       }}
      >
      <FormInPut
      label="Email"
      keyboardType='"Email-address'
      autoCompleteType="email"
      onChange={value => {
        utils.validateEmail(value, setemailError);
        setemail(value);
      }}
      errorMsg={emailError}
      appendComponent={
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Image
            source={
              email == '' || (email != '' && emailError == '')
                ? icons.correct
                : icons.cancel
            }
            style={{
              height: 20,
              width: 20,
              tintColor:
                email == '' || (email != '' && emailError == '')
                  ? COLORS.green
                  : COLORS.red,
            }}
          />
        </View>
      }
      />
      </View>

      <TextButton
        label="Send Mail"
        disabled={isSendmail() ? false : true}
        buttonCointainerStyle={{
            height : 55,
            alignItems :"center",
            marginTop : SIZES.padding,
            borderRadius : SIZES.radius,
            backgroundColor : COLORS.primary
        }}
        onpress ={()=> navigation.goBack()}
      />

    </View>
  );
};

export default ForgotPassword;
