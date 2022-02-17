import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
import Header from '../../components/Header';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';

const MyCard = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor :  COLORS.white
            }}
        >
        <Header title="MY CARDS" navigation={navigation} hiddenright = {true}/>

        </View>
    )
}

export default MyCard;