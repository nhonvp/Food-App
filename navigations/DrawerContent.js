import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, constants, dummyData, FONTS, icons, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {setSelectedTab} from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';

export default function DrawerContent({navigation,selectedTab}) {
  const dispatch = useDispatch();
  
  const CustomeDrawerIcon = ({label, icon, isFocused}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 40,
          marginBottom: SIZES.base,
          alignItems: 'center',
          paddingLeft: SIZES.radius,
          borderRadius: SIZES.base,
          backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
        }}
        onPress={() => {
          dispatch(setSelectedTab(label));
          navigation.navigate('MainLayout');
        }}>
        <Icon name={icon} size={20} color={COLORS.white} />
        <Text style={{marginLeft: 15, color: COLORS.white, ...FONTS.h3}}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Icon name="close" size={35} color={COLORS.white} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: SIZES.radius,
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: SIZES.radius,
              }}
              source={dummyData.myProfile.profile_image}></Image>

            <View style={{marginLeft: 25}}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>
                {dummyData.myProfile.name}
              </Text>
              <Text style={{color: COLORS.white, ...FONTS.h4}}>
                View Your Profile
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{flex: 1, marginTop: SIZES.padding}}>
            <CustomeDrawerIcon
              label="Home"
              icon="home"
              isFocused={selectedTab == 'Home'}
            />
            <CustomeDrawerIcon label="My Wallet" icon="wallet" isFocused={selectedTab == 'My Wallet'}/>
            <CustomeDrawerIcon label="Nofication" icon="bells" isFocused={selectedTab == 'Nofication'}/>
            <CustomeDrawerIcon label="Favourite" icon="hearto" isFocused={selectedTab == 'Favourite'}/>
            <View
              style={{
                height: 1,
                width: 200,
                marginVertical: SIZES.radius,
                marginLeft: SIZES.radius,
                backgroundColor: COLORS.lightGray1,
              }}></View>
            <CustomeDrawerIcon label="Track Your Order" icon="hearto" isFocused={selectedTab == 'Track Your Order'}/>
            <CustomeDrawerIcon label="Coupons" icon="hearto" isFocused={selectedTab == 'Coupons'}/>
            <CustomeDrawerIcon label="Settings" icon="setting" isFocused={selectedTab == 'Settings'}/>
            <CustomeDrawerIcon label="Invite a Friend" icon="hearto" isFocused={selectedTab == 'Invite a Friend'}/>
            <CustomeDrawerIcon label="Help Center" icon="hearto" isFocused={selectedTab == 'Help Center'}/>
          </View>
        </View>
      </View>
      <View style={{marginBottom: 12, marginLeft: 5}}>
        <CustomeDrawerIcon label="Logout" icon="logout" />
      </View>
    </DrawerContentScrollView>
  );
}
