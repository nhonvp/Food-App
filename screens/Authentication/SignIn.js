import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {set} from 'react-native-reanimated';
import FormInPut from '../../components/FormInput';
import {COLORS, icons, SIZES} from '../../constants';
import AuthLayout from './AuthLayout';

const SignIn = ({navigation}) => {
  return (
      <AuthLayout
        title="Let's Sign You In"
        subtitle="Welcome back, you've been missed "
        navigation = {navigation}
        >

    </AuthLayout>

  );
};

export default SignIn;
