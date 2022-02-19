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
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import CardItem from '../../components/CardItem';
import TextButton from '../../components/TextButton'

const MyCard = ({ navigation }) => {

    const [isSelectedCard, setisSelectedCard] = useState("");
    const [iconImage, seticonImage] = useState({});

    const renderMycards= () => {
        return (
            <View
            >
            {dummyData.myCards.map((item,index)=>{
                return(
                    <CardItem
                    item={item}
                    key={item.id}
                    isSelected = {isSelectedCard == item.id + "MyCard"}
                    onpress = {() => {setisSelectedCard(item.id + "MyCard");
                    seticonImage({...item})

                }}
                    />
                )
            })}
            </View>
        )
    }

    const renderAddNewCard = () =>{
        return (
            <View>
                <Text style={{
                    ...FONTS.h3,
                    marginTop : SIZES.radius,
                    fontWeight : "700"
                }}>
                    Add New Card
                </Text>
                {dummyData.allCards.map((item,index) =>{
                    return (
                        <ScrollView>
                            <CardItem
                            item={item}
                            key={item.id}
                            isSelected = {isSelectedCard == item.id + "NewCard"}
                            onpress = {() => {
                                setisSelectedCard(item.id + "NewCard");
                                seticonImage({...item})
                            }
                        
                        }
                            />
                        </ScrollView>
                    )
                })}
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
             style={{
                 paddingTop : SIZES.radius,
                 paddingBottom : SIZES.padding,
                 paddingHorizontal : SIZES.padding
             }}
            >
                <TextButton
                disabled={isSelectedCard == null}
                buttonCointainerStyle={{
                    height : 60, 
                    borderRadius : SIZES.radius,
                    backgroundColor : isSelectedCard ? COLORS.primary : COLORS.gray
                }}
                label={isSelectedCard.slice(1) == "NewCard" ? "Add" : "Place Your Order"}
                labelStyle = {{
                    marginTop : 15 
                }}
                onpress = {() => {
                    if (isSelectedCard.slice(1) == "NewCard") {
                        navigation.navigate("AddCard", {selectedCard : iconImage})
                    }else {
                        navigation.navigate("Checkout",{selectedCard : iconImage})
                    }
                }}
                />
               
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor :  COLORS.white
            }}
        >
        <Header title="MY CARDS" icon="back" isCard = {true} navigation={navigation}/>
            
        <ScrollView
         contentContainerStyle={{
             flexGrow : 1,
             marginTop : SIZES.radius,
             paddingHorizontal : SIZES.padding,
             paddingBottom : SIZES.radius
         }}
        >
        {renderMycards()}
        {renderAddNewCard()}

        </ScrollView>
        {renderFooter()}
        </View>
    )
}

export default MyCard;