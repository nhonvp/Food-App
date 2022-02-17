import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
  Image,
  TouchableOpacity,StyleSheet
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from '../../constants';
// import Animated from 'react-native-reanimated';
import {useRef} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Section = ({title, children}) => {
  return (
    <View style={{marginTop: SIZES.padding}}>
      <Text style={{...FONTS.h3, fontWeight: '700'}}>{title}</Text>
      {children}
    </View>
  );
};

const TextButton = ({label, labelStyle, buttonCointainerStyle, onpress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonCointainerStyle,
      }}
      onPress={onpress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
  onpress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}
      onPress={onpress}>
      <Text
        style={{
          ...FONTS.body3,
          ...labelStyle,
        }}>
        {label}
      </Text>

      <Image
        source={icon}
        style={{
          marginLeft: 5,
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};
export default function FilterModal({isvisible, onClose}) {
  const [showFilterModal, setShowFilterModal] = useState(isvisible);
  const modalAnimatedVale = useRef(new Animated.Value(0)).current;

  console.log(modalAnimatedVale);
  const [deliveryTime, setdeliveryTime] = useState('');
  const [ratings, setratings] = useState('');
  const [tags, settags] = useState('');

  const renderDistance = () => {
    return (
      <View>
        <Section title="Distance">
        <MultiSlider
          values={[3, 10]}
          min={1}
          max={20}
          sliderLength={SIZES.width - SIZES.padding * 2 - 20}
          step={1}
          markerOffsetY={20}
          selectedStyle={{backgroundColor: COLORS.primary}}
          trackStyle={{
            height: 10,
            width: 10,
            backgroundColor: COLORS.lightGray2,
          }}
          minMarkerOverlapDistance={50}
          customMarker={e => {
            return (
              <View
                style={{
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    borderWidth: 4,
                    borderColor: COLORS.white,
                    backgroundColor: COLORS.primary,
                    ...styles.shadow,
                  }}>
                </View>
                <Text
                style={{
                  marginTop: 5,
                  color: COLORS.darkGray,
                  ...FONTS.body3,
                }}>
                {e.currentValue} km
              </Text>
              </View>
            );
          }}
          onValuesChange={values => {
            // console.log(values);
          }}></MultiSlider>
        </Section>
      </View>
    );
  };

  const renderDeliveryTime = () => {
    return (
      <View>
        <Section title="Delivery Time">
          <View
            style={{
              flexDirection: 'row',
              // flexWrap : "wrap",
              marginTop: SIZES.radius,
            }}>
            {constants.delivery_time.map((item, index) => {
              return (
                <TextButton
                  key={index}
                  label={item.label}
                  labelStyle={{
                    color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                    ...FONTS.body3,
                  }}
                  buttonCointainerStyle={{
                    width: '30%',
                    height: 50,
                    margin: 5,
                    alignItems: 'center',
                    borderRadius: 8,
                    backgroundColor:
                      item.id == deliveryTime
                        ? COLORS.primary
                        : COLORS.lightGray2,
                  }}
                  onpress={() => {
                    setdeliveryTime(item.id);
                  }}
                />
              );
            })}
          </View>
        </Section>
      </View>
    );
  };

  const renderPriceRange = () => {
    return (
      <View>
        <Section title="Price Range" />
        <MultiSlider
          values={[10, 50]}
          min={1}
          max={100}
          sliderLength={SIZES.width - SIZES.padding * 2 - 20}
          step={1}
          markerOffsetY={20}
          selectedStyle={{backgroundColor: COLORS.primary}}
          trackStyle={{
            height: 10,
            width: 10,
            backgroundColor: COLORS.lightGray2,
          }}
          minMarkerOverlapDistance={50}
          customMarker={e => {
            return (
              <View
                style={{
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    borderWidth: 4,
                    borderColor: COLORS.white,
                    backgroundColor: COLORS.primary,
                    shadowColor : "#000000",
                    shadowOffset : {
                        width : 0,height : 3
                    },
                    shadowRadius : 1,
                    shadowOpacity : 0.1
                  }}>
                </View>
                <Text
                style={{
                  marginTop: 5,
                  color: COLORS.darkGray,
                  ...FONTS.body3,
                }}>
                {' '}
                ${e.currentValue}
              </Text>
              </View>
            );
          }}
          onValuesChange={values => {
            console.log(values);
          }}
        />
      </View>
    );
  };

  const renderRating = () => {
    return (
      <View>
        <Section title="Ratings" />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={index}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                }}
                label={item.label}
                labelStyle={{
                  color: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                icon={icons.star}
                iconStyle={{
                  tintColor: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                onpress={() => {
                  setratings(item.id);
                }}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderTags = () => {
    return (
      <View>
        <Section title="Tags" />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 20,
          }}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={index}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray2,
                  ...FONTS.h3,
                }}
                buttonCointainerStyle={{
                  height: 50,
                  margin: 5,
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                  borderRadius: SIZES.radius,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                label={item.label}
                onpress={() => settags(item.id)}
              />
            );
          })}
        </View>
      </View>
    );
  };
  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedVale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedVale, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [showFilterModal]);

  const ModalY = modalAnimatedVale.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, 180]
  });

  return (
    <Modal animationType="fade" transparent={true} visible={isvisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: 150,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{...FONTS.h3, fontSize: 18, fontWeight: '700', flex: 1}}>
              Filter Your Search
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              onPress={onClose}>
              <Image
                style={{
                  tintColor: COLORS.gray2,
                  width: 30,
                  height: 30,
                }}
                source={icons.cross}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle = {{
                paddingBottom : 250 
            }}
            >
            {renderDistance()}
            {renderDeliveryTime()}
            {renderPriceRange()}
            {renderRating()}
            {renderTags()}
          </ScrollView>
          <View
          style={{
              position : "absolute",
              bottom : 150,
              left :0,
              right: 0,
              height : 110,
              paddingHorizontal : SIZES.padding,
              paddingVertical : SIZES.radius,
              backgroundColor  : COLORS.white
          }}
          >
          <TextButton
          label="Apply Button"
          buttonCointainerStyle={{
              height : 50,
              borderRadius : SIZES.base,
              backgroundColor :  COLORS.primary
          }}
          onpress = {()=> {
              console.log('Apply Filter')
          }}
          />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
    shadow : {
        shadowColor : '#000000',
        shadowOffset : {
            width : 0,
            height : 3
        },
        shadowRadius : 1,
        shadowOpacity : 0.1,
    }
})
