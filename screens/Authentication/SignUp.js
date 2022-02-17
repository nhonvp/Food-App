import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AuthLayout from './AuthLayout';
import FormInPut from '../../components/FormInput';
import {COLORS, icons, SIZES, FONTS} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomSwitch from '../../components/CustomSwitch';
import utils from '../../Utils/utils';
import TextIconButton from '../../components/TextIconButton';
import TextButton from '../../components/TextButton';

const SignUp = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('         ');
  const [usernameError, setusernameError] = useState('');
  const [username, setusername] = useState('');

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
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        enableAutomaticScroll={true}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
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
            marginTop: SIZES.padding,
          }}>
          <Text
            style={{
              ...FONTS.h2,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Gets Started
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.darkGray,
              marginTop: SIZES.base,
            }}>
            Create an account to continute!
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
          label="Username"
          keyboardType='"username'
          autoCompleteType="username"
          onChange={value => {
            setusername(value);
          }}
          errorMsg={usernameError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  email == '' || (email != '' && usernameError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == '' || (email != '' && usernameError == '')
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
            onpress={() => {
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
              label="Sign In"
              buttonCointainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h3,
              }}
              onpress={() => {
                navigation.navigate('SignIn');
              }}
            />
          </View>
        </View>

        <View>
          <TextIconButton
            cointainerStyle={{
              height: 50,
              alignItems: 'center',
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.blue,
            }}
            icon={icons.fb}
            iconPosition="LEFT"
            iconStyle={{
              tintColor: COLORS.white,
            }}
            label="Continute With FaceBook"
            labelStyle={{
              marginLeft: SIZES.radius,
              color: COLORS.white,
            }}
            onpress={() => console.log('FB')}
          />

          <TextIconButton
            cointainerStyle={{
              height: 50,
              alignItems: 'center',
              marginTop: 12,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray2,
            }}
            icon={icons.google}
            iconPosition="LEFT"
            iconStyle={{
              tintColor: null,
            }}
            label="Continute With Google"
            labelStyle={{
              marginLeft: SIZES.radius,
            }}
            onpress={() => console.log('GG')}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
