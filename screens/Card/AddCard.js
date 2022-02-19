import React, {useEffect, useState} from 'react';
import {View, Text, Button, ImageBackground, Image} from 'react-native';
import Header from '../../components/Header';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormInPut from '../../components/FormInput';
import RadioButton from '../../components/RadioButton';
import utils from '../../Utils/utils';
import TextButton from '../../components/TextButton'

const AddCard = ({navigation, route}) => {
  const {selectedCard} = route.params;

  const [cardNumber, setcardNumber] = useState('');
  const [cardNumberError, setcardNumberError] = useState('');
  const [cardName, setcardName] = useState('');
  const [cardNameError, setcardNameError] = useState('');
  const [expiryDate, setexpiryDate] = useState('');
  const [expiryDateError, setexpiryDateError] = useState('');
  const [cvv, setcvv] = useState('');
  const [cvvError, setcvvError] = useState('');
  const [isRemember, setisRemember] = useState(true);

  const isEnableAddCard = () =>{
    return cardNumber != "" && cardName != "" && expiryDate != "" && cvv != "" && cardNameError == "" &&
    cardNumberError == "" && expiryDateError == "" && cvvError == "" ;
  }
  useEffect(() => {
    return () => {};
  }, []);

  const renderCard = () => {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: '100%',
          borderRadius: SIZES.radius,
          marginTop: 24,
          overflow: 'hidden',
        }}>
        <Image
          source={selectedCard.icon}
          resizeMode="center"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            height: 30,
            width: 80,
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
            }}>
            {cardName}
          </Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              {cardNumber}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body3}}>12/25</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const renderForm = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
        }}>
        <FormInPut
          label="Card Number"
          keyboardType="number-pad"
          maxlength={19}
          value={cardNumber}
          onChange={value => {
            setcardNumber(
              value
                .replace(/\s/g, '')
                .replace(/(\d{4})/g, '$1')
                .trim(),
            );
            utils.validateInput(value, 19, setcardNumberError);
          }}
          errorMsg={cardNumberError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  cardNumber == '' ||
                  (cardNumber != '' && cardNumberError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    cardNumber == '' ||
                    (cardNumber != '' && cardNumberError == '')
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <FormInPut
          label="Cardholder Name"
          cointainerStyle={{
            marginTop: SIZES.radius,
          }}
          value={cardName}
          onChange={value => {
            setcardName(value);
            utils.validateInput(value, 19, setcardNameError);
          }}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  cardName == '' || (cardName != '' && cardNameError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    cardName == '' || (cardName != '' && cardNameError == '')
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
          }}>
          <FormInPut 
          label="Expiry Date"
          value ={expiryDate}
          placeholder = "MM/YY"
          maxlength={3}
          cointainerStyle ={{
            flex : 1
          }}
          onChange = {(value) => {
            utils.validateInput(value,5,setexpiryDateError);
            setexpiryDate(value);
          }}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  expiryDate == '' || (expiryDate != '' && expiryDateError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                  expiryDate == '' || (expiryDate != '' && expiryDateError == '')
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
          />

          <FormInPut 
          label="CVV"
          value ={expiryDate}
          maxlength={3}
          cointainerStyle ={{
            flex : 1,
            marginLeft : 12
          }}
          onChange = {(value) => {
            utils.validateInput(value,3,setcvvError);
            setcvv(value);
          }}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  cvv == '' || (cvv != '' && cvvError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                  cvv == '' || (cvv != '' && cvvError == '')
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
          />
        </View>

        <View
        style={{
          alignItems : "flex-start",
          marginTop : 24
        }}
        >
        <RadioButton
        label="Remember this card details."
        isSelected={isRemember}
        onpress = {() => setisRemember(!isRemember)}
      />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          paddingHorizontal : 24,
          paddingTop : 12,
          paddingBottom : 24
        }}
      >
        <TextButton
        label= "Add Card"
        disabled={!isEnableAddCard()}
        buttonCointainerStyle={{
          height : 60,
          borderRadius : SIZES.radius,
          backgroundColor : isEnableAddCard() ? COLORS.primary : COLORS.transparentPrimray,

        }}
        onpress = {() => navigation.goBack()}
        />
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header
        title="ADD NEW CARDS"
        icon="back"
        isCard={true}
        navigation={navigation}
      />

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {renderCard()}
        {renderForm()}
      </KeyboardAwareScrollView>

      {renderFooter()}
    </View>
  );
};

export default AddCard;
