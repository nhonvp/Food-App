import React, {useRef,useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ListItem} from 'react-native-elements/dist/list/ListItem';

import {COLORS, constants, FONTS, SIZES} from '../../constants';

const OnBoarding = ({navigation}) => {
  const flastListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentIndex, setcurrentIndex] = useState(0);
  const onViewChangeRef = useRef(({viewableItems, changed}) => {
        setcurrentIndex(viewableItems[0].index);
  })

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={{
                borderRadius: 15,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}></Animated.View>
          );
        })}
      </View>
    );
  };

  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo_02.png')}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.5,
            height: 100,
          }}
        />
      </View>
    );
  }
  const TextButton = ({label, buttonCointainer, labelStyle, onpress}) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
          ...buttonCointainer,
        }}
        onPress={onpress}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
            ...labelStyle,
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };
  function renderFooter(navigation) {
    return (
      <View
        style={{
          height: 160,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Dots />
        </View>

       {currentIndex < constants.onboarding_screens.length -1 &&
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
        }}>
        <TextButton
          label="Skip"
          buttonCointainer={{
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.darkGray2,
          }}
          onpress={() => {
              console.log( Number(scrollX._value) / SIZES.width)
          //   navigation.replace('SignIn');
          }}
        />
        <TextButton
          label="Next"
          buttonCointainer={{
            height: 60,
            width: 200,
            borderRadius: SIZES.radius,
          }}
          onpress={() => {
              let index = Math.ceil(Number(scrollX._value) / SIZES.width) ;
              if ( index < constants.onboarding_screens.length - 1) {
                  flastListRef.current.scrollToIndex({
                      index : currentIndex +1,
                      animated : true
                  })
              }
          }}
        />
      </View>
    }
    {currentIndex == constants.onboarding_screens.length -1 &&
        <View
        style = {{
            paddingHorizontal : SIZES.padding,
            marginVertical :  SIZES.padding
        }}
        >
        <TextButton
        label="Let's Get Started"
        buttonCointainer={{
            height : 60,
            borderRadius : SIZES.radius
        }}
        onpress = {() => {navigation.replace("SignIn")}}
        >
        
        </TextButton>
        </View>
    }
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flastListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged = {onViewChangeRef.current}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}>
              <View
                style={{
                  flex: 3,
                }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    height: index == 1 ? '86.5%' : '100%',
                    width: '100%',
                  }}>
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      // marginTop : 24,
                      width: SIZES.width * 0.8,
                      height: SIZES.height * 0.8,
                      marginBottom: 50,
                    }}
                  />
                </ImageBackground>
              </View>
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: SIZES.radius,
                }}>
                <Text style={{...FONTS.h1, fontSize: 24, fontWeight: '700'}}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    color: COLORS.darkGray,
                    paddingHorizontal: SIZES.padding,
                    ...FONTS.body3,
                  }}>
                  {item.description}
                </Text>
              </View>

              {renderFooter(navigation)}
            </View>
          );
        }}
      />
    </View>
  );
};

export default OnBoarding;
