import React,{useState} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
import Header from '../../components/Header';
import {COLORS, constants, dummyData, FONTS, icons, SIZES} from '../../constants';
import TextButton from '../../components/TextButton';
import TextIconButton from '../../components/TextIconButton';

const DeliveryStatus = ({ navigation }) => {
    const [currentStep, setcurrentStep] = useState(2)
    const renderInfo = () =>{
        return (
            <View
             style={{
                 marginTop : SIZES.radius,
                 paddingHorizontal : SIZES.padding
             }}
            >
             <Text style={{textAlign : "center",color : COLORS.gray,...FONTS.body4}}>Estimated Delivery</Text>
             <Text style={{textAlign : "center", ...FONTS.h2, fontWeight : "700"}}>21 Sept 2021/ 12:30PM</Text>
            </View>
        )
    }
    
    const renderTrackOrder = () =>{
        return (
            <View
            style={{
                marginTop : SIZES.padding,
                paddingVertical : SIZES.padding,
                borderRadius : SIZES.radius,
                backgroundColor : COLORS.white2,
                borderWidth : 2,
                borderColor : COLORS.lightGray2
            }}
             >
                <View
                style={{
                    flexDirection : "row",
                    alignItems : "center",
                    justifyContent : "space-between",
                    marginBottom : 20,
                    paddingHorizontal : SIZES.padding
                }}
                >
                    <Text style={{
                        ...FONTS.h3,fontWeight : "700"
                    }}>Track Order</Text>
                    <Text style={{
                        ...FONTS.h3, color: COLORS.lightGray1
                    }}>NY02SNI</Text>
                </View>

                <View style={{
                    height : 2,
                    borderColor : COLORS.lightGray2,
                    backgroundColor : COLORS.lightGray2,
                    marginTop : SIZES.radius
                }}>
                </View>

                <View
                style={{
                    marginTop : SIZES.padding,
                    paddingHorizontal : SIZES.padding
                }}
                >
                {constants.track_order_status.map((item,index) => {
                    return (
                        <View
                        key={index}
                        >
                            <View
                             style={{
                                 flexDirection : "row",
                                 alignItems : "center",
                                 marginVertical : -3
                             }}
                            >
                            <Image
                                source={icons.check_circle}
                                style={{
                                    height : 40,
                                    width : 40,
                                    tintColor : index <= currentStep ? COLORS.primary : COLORS.lightGray1,
                                    // marginTop : SIZES.padding
                                }}                
                            />

                            <View
                             style={{
                                 marginLeft : SIZES.radius
                             }}
                            >
                                <Text style={{...FONTS.h3,fontWeight : "bold"}}>{item.title}</Text>
                                <Text style={{color : COLORS.gray, ...FONTS.body4}}>{item.sub_title}</Text>
                            </View>
                            </View>

                             {index < constants.track_order_status.length -1 && 
                                <View>
                                    {index < currentStep &&
                                        <View
                                         style= {{
                                             height : 50,
                                             width: 3,
                                             backgroundColor : COLORS.primary,
                                             marginLeft : 18
                                         }}
                                        >
                                        
                                        </View>
                                    }
                                    {
                                        index >= currentStep &&
                                       <Image
                                        source={icons.dotted_line}
                                        resizeMode = "cover"
                                        style={{
                                            width : 4,
                                            height: 50,
                                            marginLeft : 18
                                        }}
                                       />
                                        
                                        
                                    }
                                </View>
                            }
                        </View>
                    )
                })}
                </View>
            </View>
        )
    }

    const renderFooter = () => {
        return(
            <View
             style={{
                 marginTop : SIZES.radius,
                 marginBottom : SIZES.padding
             }}
            >
            {currentStep < constants.track_order_status.length - 1 &&
                <View
                 style= {{
                     flexDirection : "row",
                     height: 55,
                 }}
                >
                <TextButton
                 buttonCointainerStyle={{
                     width : "40%",
                    borderRadius : SIZES.base,
                    backgroundColor : COLORS.lightGray2
                 }}
                 label="Cancel"
                 labelStyle={{
                     color : COLORS.primary
                 }}
                 onpress = {() => navigation.navigate("FoodDetail")}
                />

                 <TextIconButton
                label="Map View"
                iconPosition = "LEFT"
                cointainerStyle={{
                    flex :1,
                    marginLeft : 12,
                    borderRadius : SIZES.radius,
                    backgroundColor : COLORS.primary
                }}
                labelStyle ={{
                    color : COLORS.white,
                    ...FONTS.h3
                }}
                icon = {icons.map}
                iconStyle = {{
                    tintColor : COLORS.white,
                    height:25,
                    width : 25,
                    marginRight : 8
                }}
                onpress = {() => navigation.navigate("Map")}
                 />
                </View>
            }

            {
                currentStep == constants.track_order_status.length - 1 &&
                <TextButton
                    buttonCointainerStyle={{
                        height : 55,
                        borderRadius : SIZES.radius
                    }}
                    label = "DONE"
                    onpress={() => navigation.navigate("FoodDetail")}
                />
            }
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor : COLORS.white,
                paddingHorizontal :  SIZES.padding
            }}
        >

        <Header title="DELIVERY STATUS" icon="back" isCard = {true} navigation={navigation}/>

        {renderInfo()}

        <ScrollView
         showsVerticalScrollIndicator ={false}
        >
            {renderTrackOrder()}
        </ScrollView>

        {renderFooter()}
        </View>
    )
}

export default DeliveryStatus;