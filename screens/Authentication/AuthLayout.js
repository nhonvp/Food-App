import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormInPut from '../../components/FormInput';
import CustomSwitch from '../../components/CustomSwitch';
import utils from '../../Utils/utils';
import TextIconButton from '../../components/TextIconButton';
import TextButton from '../../components/TextButton';

const AuthLayout = ({
  title,
  subtitle,
  titleContainerStyle,
  children,
  navigation,
}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('         ');

  const [showPass, setshowPass] = useState(false);
  const [saveMe, setsaveMe] = useState(false);

  const isEnableSignIn = () => {
    return email != '' && password != '' && emailError == '';
  };
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>

      <View
        // keyboardDismissMode="on-drag"
        // enableAutomaticScroll={true}
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
        >
        <View
          style={{
            // flex: 1, //note
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
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}>
          <Text
            style={{
              ...FONTS.h2,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            {title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.darkGray,
              marginTop: SIZES.base,
            }}>
            {subtitle}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding * 2,
          }}>
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
          <FormInPut
            label="Password"
            keyboardType="Password"
            secureTextEntry={!showPass}
            autoCompleteType="password"
            onChange={value => {
              utils.validatePassword(value, setpasswordError);
              setpassword(value);
            }}
            errorMsg={passwordError}
            appendComponent={
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setshowPass(!showPass);
                }}>
                <Image
                  source={showPass ? icons.eye_close : icons.eye}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.gray,
                  }}
                />
              </TouchableOpacity>
            }
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            <CustomSwitch
              value={saveMe}
              onChange={value => {
                setsaveMe(value);
              }}></CustomSwitch>

            <TextButton
              label="Forgot Password"
              labelStyle={{
                color: COLORS.gray,
                ...FONTS.h4,
              }}
              buttonCointainerStyle={{
                backgroundColor: null,
              }}
              onpress={()=>{navigation.navigate("ForgotPassword")}}
            />
          </View>
          <TextButton
            label="Sign In"
            disabled={isEnableSignIn() ? false : true}
            buttonCointainerStyle={{
              height: 55,
              alignItems: 'center',
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius,
              backgroundColor: isEnableSignIn()
                ? COLORS.primary
                : COLORS.transparentPrimray,
            }}
            onpress = {() => {
              navigation.navigate('Otp');
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.base,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: COLORS.darkGray,
                ...FONTS.h3,
              }}>
              Don't have an account?{' '}
            </Text>

            <TextButton
              label="Sign Up"
              buttonCointainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h3,
              }}
              onpress={() => {
                navigation.navigate('SignUp');
              }}
            />
          </View>
        </View>

        <View
        style={{
          // flex: 1,
          justifyContent : "flex-end",
          // height : 150,
        }}
        >
        <TextIconButton
        cointainerStyle = {{
          height : 50,
          alignItems : "center",
          borderRadius : SIZES.radius,
          backgroundColor : COLORS.blue
        }}
          icon = {icons.fb}
          iconPosition = "LEFT"
          iconStyle={{
            tintColor : COLORS.white
          }}
          label = "Continute With FaceBook"
          labelStyle={{
            marginLeft : SIZES.radius,
            color : COLORS.white
          }}
          onpress = {()=> console.log('FB')}
        />

        <TextIconButton
        cointainerStyle = {{
          height : 50,
          alignItems : "center",
          marginTop : 12,
          borderRadius : SIZES.radius,
          backgroundColor : COLORS.lightGray2
        }}
          icon = {icons.google}
          iconPosition = "LEFT"
          iconStyle={{
            tintColor : null
          }}
          label = "Continute With Google"
          labelStyle={{
            marginLeft : SIZES.radius,
          }}
          onpress = {()=> console.log('GG')}
        />
        </View>
      </View>

    </View>

  );
};
const styles = StyleSheet.create({});

export default AuthLayout;
