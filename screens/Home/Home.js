import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import HorizonatalFoodCard from '../../components/HorizonatalFoodCard';
import VerticalFoodCard from '../../components/VerticalFoodCard';
import FilterModal from './FilterModal';

const Home = ({navigation}) => {
  const [selectedCategoryId, setselectedCategoryId] = useState(1);
  const [selectedMenuType, setselectedMenuType] = useState(1);

  const [MenuList, setMenuList] = useState([]);
  const [popular, setpopular] = useState([]);
  const [recommended, setrecommended] = useState([]);

  const [showFilterModal, setshowFilterModal] = useState(false);
  function handleChangeCategory(categoryID, menuTypeID) {
    let selectedPopular = dummyData.menu.find(a => a.name == "Popular");
    let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended");
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeID);

    setpopular(selectedPopular.list.filter(a =>a.categories.includes(categoryID)));
    setrecommended(selectedRecommend.list.filter(a => a.categories.includes(categoryID)))
    setMenuList(
      selectedMenu.list.filter(a => a.categories.includes(categoryID)),
    );
  }

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
    return () => {};
  }, []);

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="Search Food"
        />

        <TouchableOpacity onPress={() => setshowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  function renderMenuType() {
    return (
      <FlatList
        data={dummyData.menu}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
                // marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() => {
                setselectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}>
              <Text
                style={{
                  color:
                    selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                  ...FONTS.h3,
                  fontWeight: '700',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
  const Section = ({title}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={{flex: 1, ...FONTS.h3,fontWeight : "bold"}}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('a');
          }}>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>Show All</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function renderRecommendSection() {
    return (
       <View>
       <Section
       title="Recommended"
       />
       <FlatList
       data={recommended}
       horizontal
       keyExtractor={item => item.id}
       showsHorizontalScrollIndicator={false}
       renderItem = {({item,index}) => {
           return (
               <HorizonatalFoodCard
               containerStyle={{
                   height :180,
                   width : SIZES.width * 0.85,
                   marginLeft : index == 0 ? SIZES.padding : 18,
                   marginRight : index ==recommended.length -1 ? SIZES.padding : 0,
                   paddingRight : SIZES.radius,
                   alignItems : "center"
               }}
               imageStyle={{
                   marginTop : 35,
                   height : 150,
                   width : 150
               }}
               item = {item}

           />
           )
       }}
   />
       </View>
    )
  }

  function renderPopularSection() {
    return (
        <View>
        <Section
        title="Popular"
        />
        <FlatList
        data={popular}
        showsHorizontalScrollIndicator = {false}
        keyExtractor ={item => item.id}
        horizontal
        renderItem={({item,index})=>{
            return (
                <VerticalFoodCard
                    containerStyle={{
                        height : 250,
                        with :  250,
                        marginLeft : SIZES.padding,
                        paddingLeft : 20,
                        alignItems : "center"
                    }}
                    imageStyle = {{
                        height : 150,
                        width : 150,
                    }}
                    item = {item}
                    onpress ={() => navigation.navigate("FoodDetail")}
                />
            )
        }}
        />
        </View>

    )
  }

  function renderFoodCategories() {
      return (
          <View>
          <FlatList
            data={dummyData.categories}
            keyExtractor = {item => item.id}
            horizontal
            showsHorizontalScrollIndicator ={false}
            renderItem = {({item,index})=>{
                return (
                    <TouchableOpacity style= {{
                        height : 55,
                        flexDirection : "row",
                        marginTop :  SIZES.padding,
                        marginLeft :  24,
                        paddingHorizontal : 8,
                        borderRadius : SIZES.radius,
                        backgroundColor : selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                    }}
                    onPress ={()=>{
                        setselectedCategoryId(item.id);
                        handleChangeCategory(item.id, selectedMenuType)
                    }}
                    >
                    <Image
                    source={item.icon}
                    style ={{
                        width : 50,
                        height : 50,
                        marginTop : 5,
                    }}
                    />
                    <Text style ={{
                         alignSelf : "center",
                        marginRight : SIZES.base,
                        color : selectedCategoryId == item.id ? COLORS.white :  COLORS.darkGray2,
                        ...FONTS.h3
                    }}>
                    {item.name}
                    </Text>
                    </TouchableOpacity>
                )
            }}
          />
          </View>
      )
  }
  function renderDeliveryTo() {
    return (
        <View
        style ={{
            marginTop :  SIZES.padding,
            marginHorizontal : SIZES.padding
        }}
        >
            <Text 
             style ={{
                 color : COLORS.primary,
                 ...FONTS.body3
             }}
            >
            DELIVERY TO
            </Text>
        <TouchableOpacity
        style ={{
            flexDirection : "row",
            alignItems : "center",
            marginTop : SIZES.base            
        }}
        >
        <Text>{dummyData.myProfile.address}</Text>
        <Image
        source={icons.down_arrow}
          style ={{
            marginLeft :  SIZES.base,
            height : 20,
            width : 20,
          }}
        />
        </TouchableOpacity>
        </View>
    )
  }
  
  return (
      <View
      style={{
        flex: 1,
      }}>
      {renderSearch()}

      {showFilterModal &&
        <FilterModal
        isvisible= {showFilterModal}
        onClose = {() => setshowFilterModal(false)}
      />
      }

      <FlatList
        data={MenuList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
            <View>
            {renderDeliveryTo()}
            {renderFoodCategories()}
            {renderPopularSection()}
            {renderRecommendSection()}
            {renderMenuType()}
            </View>
        }
        renderItem={({item, index}) => {
          return <HorizonatalFoodCard 
          containerStyle={{
            height: 130,
            alignItems: 'center',
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.radius,
          }}

          imageStyle={{
            marginTop: 20,
            height: 110,
            width: 110,
          }}
          item={item} />;
        }}
        ListFooterComponent={
          <View style={{height : 200}}></View>
        }
      />
    </View>
  );
};

export default Home;
