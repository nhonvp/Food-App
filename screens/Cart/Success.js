import React from 'react';
import {
    View,
    Text,Image
} from 'react-native';
import TextButton from '../../components/TextButton';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../../constants';


const Success = ({ navigation }) => {

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal : SIZES.padding,
                backgroundColor :  COLORS.white
            }}
        >
            <View
             style={{
                 flex : 1,
                 alignItems : "center",
                 justifyContent : "center"
             }}
            >
                <Image
                    source = {images.success}
                    resizeMode = "center"
                    style={{
                        height : 150,
                        width : 150
                    }}
                />

                <Text style={{marginTop : SIZES.padding, ...FONTS.h1}}>Congratulations!</Text>
                <Text style={{marginTop : SIZES.padding, ...FONTS.body3,textAlign : "center", color : COLORS.darkGray}}>Payment was successfully made!</Text>

            </View>

            <TextButton
                label="Done"
                buttonCointainerStyle={{
                    height : 55,
                    borderRadius : 12,
                    backgroundColor : COLORS.primary,
                    marginBottom : SIZES.padding
                }}
                onpress = {() => navigation.navigate("DeliveryStatus")}
                />

        </View>
    )
}

export default Success