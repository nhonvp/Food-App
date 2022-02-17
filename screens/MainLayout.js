import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import Animated, { color, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import Header from '../components/Header';
import {Home, CartTab, Favourite, Notification, Search} from '../screens';
import {icons, constants, dummyData, images, theme} from '../constants';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {setSelectedTab} from '../store/actions';

const MainLayout = ({drawAnimatedStyle}) => {
  const selectedTab = useSelector(state => state.tabReducer.tabSelected);
  const flastListRef = useRef();
  const dispatch = useDispatch();

  const HomeTabFlex = useSharedValue(1);
  const HomeTabColor = useSharedValue(COLORS.white);
  const SearchTabFlex = useSharedValue(1);
  const SearchTabColor = useSharedValue(COLORS.white);
  const CartTabFlex = useSharedValue(1);
  const CartTabColor = useSharedValue(COLORS.white);
  const FavouriteTabFlex = useSharedValue(1);
  const FavouriteTabColor = useSharedValue(COLORS.white);
  const NotificationTabFlex = useSharedValue(1);
  const NotificationTabColor = useSharedValue(COLORS.white);

  const HomeFlexStyle = useAnimatedStyle(()=>{
    return {
      flex : HomeTabFlex.value
    }
  })
  const HomeColorStyle = useAnimatedStyle(()=>{
    return {
      backgroundColor : HomeTabColor.value
    }
  })

  const SearchFlexStyle = useAnimatedStyle(()=>{
    return {
      flex : SearchTabFlex.value
    }
  })
  const SearchColorStyle = useAnimatedStyle(()=>{
    return {
      backgroundColor : SearchTabColor.value
    }
  })

  const CartFlexStyle = useAnimatedStyle(()=>{
    return {
      flex : CartTabFlex.value
    }
  })
  const CartColorStyle = useAnimatedStyle(()=>{
    return {
      backgroundColor : CartTabColor.value
    }
  })

  const FavouriteFlexStyle = useAnimatedStyle(()=>{
    return {
      flex : FavouriteTabFlex.value
    }
  })
  const FavouriteColorStyle = useAnimatedStyle(()=>{
    return {
      backgroundColor : FavouriteTabColor.value
    }
  })

   const NotificationFlexStyle = useAnimatedStyle(()=>{
    return {
      flex : NotificationTabFlex.value
    }
  })
  const NotificationColorStyle = useAnimatedStyle(()=>{
    return {
      backgroundColor : NotificationTabColor.value
    }
  })
  
  useEffect(() => {
    if(selectedTab == "Home") {
      flastListRef.current.scrollToIndex({
        index : 0,
        animated : false
      })
      HomeTabFlex.value = withTiming(4,{duration : 500})
      HomeTabColor.value = withTiming(COLORS.primary,{duration : 500})
    }else {
      HomeTabFlex.value = withTiming(1,{duration : 500})
      HomeTabColor.value = withTiming(COLORS.white,{duration : 500})
    }
    
    if(selectedTab == "Search") {
      flastListRef.current.scrollToIndex({
        index : 1,
        animated : false
      })
      SearchTabFlex.value = withTiming(4,{duration : 500})
      SearchTabColor.value = withTiming(COLORS.primary,{duration : 500})
    }else {
      SearchTabFlex.value = withTiming(1,{duration : 500})
      SearchTabColor.value = withTiming(COLORS.white,{duration : 500})
    }

    if(selectedTab == "Cart") {
      flastListRef.current.scrollToIndex({
        index : 2,
        animated : false
      })
      CartTabFlex.value = withTiming(4,{duration : 500})
      CartTabColor.value = withTiming(COLORS.primary,{duration : 500})
    }else {
      CartTabFlex.value = withTiming(1,{duration : 500})
      CartTabColor.value = withTiming(COLORS.white,{duration : 500})
    }

    if(selectedTab == "Favourite") {
      flastListRef.current.scrollToIndex({
        index : 3,
        animated : false
      })
      FavouriteTabFlex.value = withTiming(4,{duration : 500})
      FavouriteTabColor.value = withTiming(COLORS.primary,{duration : 500})
    }else {
      FavouriteTabFlex.value = withTiming(1,{duration : 500})
      FavouriteTabColor.value = withTiming(COLORS.white,{duration : 500})
    }

    if(selectedTab == "Notification") {
      flastListRef.current.scrollToIndex({
        index : 4,
        animated : false
      })
      NotificationTabFlex.value = withTiming(4,{duration : 500})
      NotificationTabColor.value = withTiming(COLORS.primary,{duration : 500})
    }else {
      NotificationTabFlex.value = withTiming(1,{duration : 500})
      NotificationTabColor.value = withTiming(COLORS.white,{duration : 500})
    }

    return () => {
    };
  }, [selectedTab]);
  
  const TabButton = ({label,icon,outerContainerStyle,innerContainerStyle ,isFocused}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          dispatch(setSelectedTab(label));
        }}>
        <Animated.View style={[styles.tabbutton,outerContainerStyle]}>
          <Animated.View style={[styles.tab,innerContainerStyle]}>
            <Icon name={icon} size={20} color={isFocused ? COLORS.white : COLORS.gray}/>
            {isFocused && <Text
              numberOfLines={1}
              style={{
                marginLeft : SIZES.base,
                color : COLORS.white,
                ...FONTS.h3
              }}
              >
              {label}
              </Text>}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...drawAnimatedStyle,
      }}>
      {/*Header*/}
      <Header title={selectedTab} icon={"menu"} isHome={true}/>
      {/*Content*/}
      <View
        style={{
          flex : 1,
          marginTop : 20
        }}>
        <FlatList
          ref={flastListRef}
          horizontal
          scrollEnabled = {false}
          pagingEnabled
          snapToAlignment='center'
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor ={item => item.id}
          renderItem={({item,index})=>{
            return (
              <View style={{
                height: SIZES.height,
                width : SIZES.width
              }}>
              {item.label == constants.screens.home && <Home/>}
              {item.label == constants.screens.search && <Search/>}
              {item.label == constants.screens.cart && <CartTab/>}
              {item.label == constants.screens.favourite && <Favourite/>}
              {item.label == constants.screens.notification && <Notification/>}
              </View>
            )
          }}
        />
      </View>
      {/*Footer*/}
      <View style={styles.footer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: 'absolute',
            // top: -10,
            left: 0,
            right: 0,
            height: 120,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            // backgroundColor : "red"
          }}
        />
        <View style={styles.tabfooter}>
          <TabButton
            label="Home"
            icon="home"
            outerContainerStyle = {HomeFlexStyle}
            innerContainerStyle = {HomeColorStyle}
            isFocused={selectedTab == 'Home'}
          />
          <TabButton
            label="Search"
            icon="search1"
            outerContainerStyle = {SearchFlexStyle}
            innerContainerStyle = {SearchColorStyle}
            isFocused={selectedTab == 'Search'}
          />
          <TabButton
            label="Cart"
            icon="shoppingcart"
            outerContainerStyle = {CartFlexStyle}
            innerContainerStyle = {CartColorStyle}
            isFocused={selectedTab == 'Cart'}
          />
          <TabButton
            label="Favourite"
            icon="hearto"
            outerContainerStyle = {FavouriteFlexStyle}
            innerContainerStyle = {FavouriteColorStyle}
            isFocused={selectedTab == 'Favourite'}
          />
          <TabButton
            label="Notification"
            icon="notification"
            outerContainerStyle = {NotificationFlexStyle}
            innerContainerStyle = {NotificationColorStyle}
            isFocused={selectedTab == 'Notification'}
          />
        </View>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  footer: {
    justifyContent: 'flex-end',
    height : 80,
  },
  tabfooter: {
    flex:1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    paddingTop : 10,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
  },
  tabbutton: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  tab: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});

export default MainLayout;
