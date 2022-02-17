import OTPInputView from '@twotalltotems/react-native-otp-input';
import React,{useState,useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import TextButton from '../../components/TextButton';
import {COLORS, icons, SIZES, FONTS} from '../../constants';

const Otp = () => {
    const [timer,settimer] = useState(60);
    useEffect(() => {
      setInterval(()=>{
        settimer(prevtime => {
            if(prevtime > 0) {
                return prevtime -1
            }else {
                prevtime
            }
        } )
      },1000)
    
      return () => {
        
      }
    }, [])
    
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        paddingHorizontal : SIZES.padding,
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

      <View style={{
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
            OTP Authentication
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.darkGray,
              marginTop: SIZES.base,
            }}>
            An authentication code has been sent to nhonpham13@gmail.com
          </Text>
        </View>
      </View>

      <View
      style={{
          flex : 1,
          marginTop : SIZES.padding *2,
      }}
      >
        <OTPInputView
         style={{
             width : "100%",
             height : 50,
         }}
         pinCount={4}
         codeInputFieldStyle={{
            width : 65,
            height : 65,
            borderRadius : SIZES.radius,
            backgroundColor : COLORS.lightGray2,
            color :  COLORS.black,
            ...FONTS.h3
         }}
         onCodeFilled = {(code => {
            console.log(`Code is ${code}, you are good to go!`)
        })}
        />
        <View
        style={{
            flexDirection : "row",
            justifyContent : "center",
            marginTop :  SIZES.padding
        }}
        >
          <Text
              style={{
                  color : COLORS.gray,
                  ...FONTS.h3
              }}
          >
              Didn't receive code ?
          </Text>
          <TextButton
           label={`Resend(${timer}s)`}
           disabled = {timer == 0 ? false : true}
           buttonCointainerStyle={{
               marginLeft : SIZES.base,
               backgroundColor : null
           }}
           labelStyle={{
               color : COLORS.primary,
              ...FONTS.h3
           }}
           onpress ={() => settimer(60)}
          />
  
        </View>
      </View>

      <View
      >
           <TextButton
           label="Continute"
           buttonCointainerStyle={{
               height : 50,
               alignItems : "center",
               borderRadius : SIZES.radius,
               backgroundColor : COLORS.primary
           }}
           />
           <View
           style={{
               marginTop : SIZES.padding,
               alignItems :"center"
           }}
           >
           <Text style={{color:COLORS.darkGray}}>
            By signing up, you agree to our
           </Text>

           <TextButton
                label="Terms and Conditions"
                buttonCointainerStyle={{
                    backgroundColor : null
                }}
                labelStyle ={{
                    color : COLORS.primary,
                    ...FONTS.h3
                }}
                onpress= {()=>console.log('term')}
           />
           </View>
      </View>
    </View>
  );
};

export default Otp;
