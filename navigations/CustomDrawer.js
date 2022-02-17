import {View, Text, StyleSheet} from 'react-native';
import {COLORS, constants, dummyData, icons, images, theme} from '../constants';
import React, {useState} from 'react';
import MainLayout from '../screens/MainLayout';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import Animated from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';

const Drawer = createDrawerNavigator();

export default function CustomDrawer({navigation,setSelected}) {
  
  const selectedTab = useSelector(state => state.tabReducer.tabSelected);

  const [process, setprocess] = useState(new Animated.Value(0));
  
  const scale = Animated.interpolateNode(process, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(process, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          drawerType: 'slide',
          overlayColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={props => {
          setTimeout(() => {
            setprocess(props.process);
          }, 0);
          return <DrawerContent 
            navigation = {props.navigation}
            selectedTab = {selectedTab}
           />;
        }}
        initialRouteName="MainLayout">
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} drawAnimatedStyle={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
