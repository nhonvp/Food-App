import React, {useState} from 'react';
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
import {SwipeListView} from 'react-native-swipe-list-view';

import StepperInput from '../../components/StepperInput';
import IconButton from '../../components/IconButton';
import FooterTotal from '../../components/FooterTotal';

const MyCart = ({navigation}) => {
  const [myCartList, setMyCartList] = useState(dummyData.myCart);

  const hanleUpdateCartQty = (newQty, id) => {
    const newCartQty = myCartList.map(item => {
      item.id === id ? {...item, qty: newQty} : item;
    });
    setMyCartList(newCartQty);
  };

  const removeMycarthandler = (id) => {
      const newMycart = [...myCartList];
      const index = newMycart.findIndex(cart => cart.id ===id )

      newMycart.splice(index,1);
      setMyCartList(newMycart);
  }
  const renderCartList = () => {
    return (
      <SwipeListView
        data={myCartList}
        // keyExtractor={item => item.id}
        contentContainerStyle={{
          marginTop: 12,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        leftOpenValue={75}
        rightOpenValue={-75}

        renderItem={(data, rowMap) => {
          return (
            <View
              style={{
                height: 100,
                backgroundColor: COLORS.lightGray2,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
              }}>
              <View
                style={{
                  width: 90,
                  height: 100,
                  marginLeft: -10,
                }}>
                <Image
                  source={data.item.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 10,
                  }}
                />
              </View>

              <View style={{flex: 1}}>
                <Text style={{...FONTS.body3}}>{data.item.name}</Text>
                <Text style={{color: COLORS.primary, ...FONTS.body3}}>
                  ${data.item.price}
                </Text>
              </View>

              <StepperInput
                containerStyle={{
                  height: 50,
                  width: 125,
                  backgroundColor: COLORS.white,
                }}
                value={data.item.qty}
                onAdd={() => {
                  hanleUpdateCartQty(data.item.qty + 1, data.item.id);
                }}
                OnMinus={() => {
                  if (data.item.qty > 1) {
                    hanleUpdateCartQty(data.item.qty - 1, data.item.id);
                  }
                }}
              />
            </View>
          );
        }}
        renderHiddenItem = {(data,rowMap) =>
            (
                <IconButton
                    containerStyle={{
                        flex :1,
                        justifyContent: 'flex-end',
                        backgroundColor : COLORS.primary,
                        flexDirection :"row",
                        alignItems :"center",
                        marginTop : 12,
                        paddingHorizontal : 12,
                        borderRadius : 12
                    }}
                    icon ={icons.delete_icon}
                    iconStyle = {{
                        marginRight : 10
                    }}
                    onpress = {() => {
                        removeMycarthandler(data.item.id);
                    }}
                />
            )
        }
        >
        
        </SwipeListView>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Header title="MY CART" navigation={navigation} icon="back" isFoodDetail = {true}/>

      {renderCartList()}
      <FooterTotal
      subtotal={37.9}
      shippingfee={0}
      total = {37.9}
      onpress = {() => navigation.navigate("MyCard")}
      />
    </View>
  );
};

export default MyCart;
