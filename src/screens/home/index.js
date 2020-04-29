import React, { Component } from 'react';

import {
    Text, 
    View,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
   
} from 'react-native';

var { height,width } = Dimensions.get("window");

import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../cart';

const item_image_1=require('../../assets/images/products/can_bang_cam_xuc.jpg');
const item_image_2=require('../../assets/images/products/dung_lua_chon_an_nhan_khi_con_tre.jpg');
const item_image_3=require('../../assets/images/products/nha_gia_kim.jpg');
const item_image_4=require('../../assets/images/products/tony_buoi_sang.jpg');

const ProductItem=({image,name,price})=>(
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
)
class HomeScreen extends Component {
    render() {
        return (
          <ScrollView>
            <View>
              <View>
                <View style={styles.header}>
                  <View style={styles.searchBar}>
                    <Icon name="md-search" size={25} style={styles.iconSearchBar}></Icon>
                    <TextInput style={styles.input_searchBar}
                      placeholder= "Bạn cần tìm sách gì?"
                      clearButtonMode='always'
                    />
                  </View>
                  <TouchableOpacity style={styles.cart} onPress={()=>this.props.navigation.navigate('Cart')}>
                    <Icon name="md-cart" size={30}></Icon>
                  </TouchableOpacity>
                </View>
                <Swiper
                  style={{height: 200}}
                  showsButtons={false}
                  autoplay={true}
                  autoplayTimeout={2}>
                    <View>
                      <Image source={require('../../assets/images/banners/banner1.jpg')}/>
                    </View>
                    <View>
                      <Image source={require('../../assets/images/banners/banner2.jpg')}/>
                    </View>
                    <View>
                      <Image source={require('../../assets/images/banners/banner3.jpg')}/>
                    </View>
                    <View>
                      <Image source={require('../../assets/images/banners/banner4.jpg')}/>
                    </View>
                </Swiper>
              </View>
            </View>
            <View style={{height:40}}>
              <Text style={{height:40,fontSize:15,padding:10}}>
                Mua sắm theo danh mục
              </Text>
            </View>
            <View style={styles.categories}>
              <View style={styles.categories_top}>
                <View style={styles.enBooks}>
                  <TouchableOpacity>
                   <Image source={require('../../assets/images/categories/enBooks.png')} resizeMode={'contain'} style={styles.categories_img}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.viBooks}>
                  <TouchableOpacity>
                    <Image source={require('../../assets/images/categories/viBooks.png')} resizeMode={'contain'} style={styles.categories_img}/>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.categories_bot}>
                <View style={styles.stationery}>
                  <TouchableOpacity>
                    <Image source={require('../../assets/images/categories/stationery.png')} resizeMode={'contain'} style={styles.categories_img}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.souvenir}>
                  <TouchableOpacity>
                    <Image source={require('../../assets/images/categories/souvenir.png')} resizeMode={'contain'} style={styles.categories_img}/>  
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text>Tất cả sản phẩm</Text>
              <ScrollView horizontal={true}>
                  <View style={styles.products}>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                  </View>
                  <View style={styles.products}>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                      <View>
                        <Image source={item_image_1} style={styles.product_image}/>
                        <Text>Cân bằng cảm xúc</Text>
                        <Text>69.000đ</Text>
                      </View>
                  </View>
              </ScrollView>
            </View>
          </ScrollView>
    
          
        );
      }
}

export default HomeScreen;


const styles=StyleSheet.create({
  header:{
    flex:1,
    flexDirection:'row',
  },
  products:{
    height:height/2 ,
    flexDirection:'row'
  },
  searchBar:{
    flex:7,
    alignItems:'flex-start',
    position:"relative",
    zIndex:1,
    borderColor: 'gray',height:40, borderWidth: 1,borderRadius:5,margin:10, padding:10,
   
  },
  iconSearchBar:{
    bottom:2
  },
  input_searchBar:{
    flex:6,
    position:'absolute',
    marginLeft:30,
   
    height:40,
    width:width*6/8+5,
   
  },
  cart:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  categories:{
    flex:1,
    height:height/3+50,
    backgroundColor:'white',
  },
  itemContainer:{
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  categories_top:{
    flex:1,
    flexDirection:'row',
    height:height/3/2,
    
  },
  categories_bot:{
    flex:1,
    flexDirection:'row',
    height:height/3/2,
  },
  enBooks:{
      width:'50%',
      padding:10,
      justifyContent:'center'
  },
  viBooks:{
      width:'50%',
      padding:10,
      justifyContent:'center'
  },
  stationery:{
    width:width/2,
    padding:10,
    justifyContent:'center'
  },
  souvenir:{
    width:'50%',
    padding:10,
    justifyContent:'center'
  },
  categories_img:{
    height:'100%',
    width:'130%'
  },
  product_image: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  }
});