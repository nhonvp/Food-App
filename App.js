import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainLayout from './screens/MainLayout';
import CustomDrawer from './navigations/CustomDrawer';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import SignUp from './screens/Authentication/SignUp';
import SignIn from './screens/Authentication/SignIn';
import ForgotPassword from './screens/Authentication/ForgotPassword';
import Otp from './screens/Authentication/Otp';
import FoodDetail from './screens/Food/FoodDetail';
import Checkout from './screens/Cart/Checkout';
import Success from './screens/Cart/Success';
import MyCard from './screens/Card/MyCard';
import MyCart from './screens/Cart/MyCart';
import DeliveryStatus from './screens/Delivery/DeliveryStatus';
import AddCard from './screens/Card/AddCard';
import Map from './screens/Delivery/Map';
import {Provider} from 'react-redux';
import Store from './store/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'MyCard'}>
          <Stack.Screen name="Home" component={CustomDrawer} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          <Stack.Screen name="Otp" component={Otp} />

          <Stack.Screen name="FoodDetail" component={FoodDetail} />

          <Stack.Screen name="Checkout" component={Checkout} />

          <Stack.Screen name="MyCart" component={MyCart} />

          <Stack.Screen name="Success" component={Success} />

          <Stack.Screen name="AddCard" component={AddCard} />

          <Stack.Screen name="MyCard" component={MyCard} />

          <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />

          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
