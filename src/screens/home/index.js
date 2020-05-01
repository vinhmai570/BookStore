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
                <View style={styles.enBooks_container}>
                  <View style={styles.enBooks_content}>
                    <TouchableOpacity style={{flex:1}}>
                        {/* <Image source={require('../../assets/images/categories/viBooks.png')} resizeMode={'contain'} style={styles.categories_img}/> */}
                        <View style={styles.enBooks_header}>
                          <Text style={styles.cate_text_header}>
                            English Books
                          </Text>
                          <Text style={styles.cate_text_content}>
                            15 Sản phẩm
                          </Text>
                        </View>
                        <View style={styles.enBooks_img_container}>
                          <Image source={require('../../assets/images/categories/enBooks_1.jpg')} resizeMode={'contain'} style={styles.enBooks_img_item}/>
                          <Image source={require('../../assets/images/categories/enBooks_2.jpg')} resizeMode={'contain'} style={styles.enBooks_img_item}/>                        
                        </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.viBooks_container}>
                  <View style={styles.viBooks_content}>
                    <TouchableOpacity style={{flex:1}}>
                          {/* <Image source={require('../../assets/images/categories/viBooks.png')} resizeMode={'contain'} style={styles.categories_img}/> */}
                          <View style={styles.enBooks_header}>
                            <Text style={styles.cate_text_header}>
                              Sách Tiếng Việt
                            </Text>
                            <Text style={styles.cate_text_content}>
                              19 Sản phẩm
                            </Text>
                          </View>
                          <View style={styles.enBooks_img_container}>
                            <Image source={require('../../assets/images/categories/viBooks_1.jpg')} resizeMode={'contain'} style={styles.enBooks_img_item}/>
                            <Image source={require('../../assets/images/categories/viBooks_2.jpg')} resizeMode={'contain'} style={styles.enBooks_img_item}/>                        
                          </View>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.categories_bot}>
                <View style={styles.stationery_container}>
                  <View style={styles.stationery_content}>
                    <TouchableOpacity style={{flex:1}}>
                          {/* <Image source={require('../../assets/images/categories/viBooks.png')} resizeMode={'contain'} style={styles.categories_img}/> */}
                          <View style={styles.enBooks_header}>
                            <Text style={styles.cate_text_header}>
                              Văn phòng phẩm
                            </Text>
                            <Text style={styles.cate_text_content}>
                              25 Sản phẩm
                            </Text>
                          </View>
                          <View style={styles.enBooks_img_container}>
                            <Image source={require('../../assets/images/categories/stationery_1.jpg')} resizeMode={'contain'} style={styles.enBooks_img_item}/>
                            <Image source={require('../../assets/images/categories/stationery_2.jpg')} resizeMode={'contain'} style={styles.enBooks_img_item}/>                        
                          </View>
                      </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.souvenir_container}>
                  <View style={styles.souvenir_content}>
                    <TouchableOpacity style={{flex:1}}>
                          {/* <Image source={require('../../assets/images/categories/viBooks.png')} resizeMode={'contain'} style={styles.categories_img}/> */}
                          <View style={styles.enBooks_header}>
                            <Text style={styles.cate_text_header}>
                              Quà lưu niệm
                            </Text>
                            <Text style={styles.cate_text_content}>
                              43 Sản phẩm
                            </Text>
                          </View>
                          <View style={styles.enBooks_img_container}>
                            <Image source={require('../../assets/images/categories/souvenir_1.jpg')} resizeMode={'contain'} style={styles.enBooks_img_item}/>
                            <Image source={require('../../assets/images/categories/souvenir_2.jpg')} resizeMode={'contain'} style={styles.enBooks_img_item}/>                        
                          </View>
                      </TouchableOpacity>
                  </View>
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
    height:height/2,
    backgroundColor:'white',
    paddingTop:10,
    
  },
  itemContainer:{
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  categories_top:{
    flex:8,
    flexDirection:'row',
    
  },
  categories_bot:{
    flex:9,
    flexDirection:'row',
    
  },
  enBooks_container:{
      width:'50%',
      justifyContent:'center',
      paddingLeft:10,
      paddingRight:5,
  },
  viBooks_container:{
      width:'50%',
      paddingLeft:5,
      paddingRight:10,
      justifyContent:'center',
      
  },
  stationery_container:{
    width:'50%',
    padding:10,
    justifyContent:'center',
    paddingLeft:10,
    paddingRight:5,
  },
  souvenir_container:{
    width:'50%',
    padding:10,
    justifyContent:'center',
    paddingLeft:5,
    paddingRight:10,
  },
  enBooks_content:{
    flex:1,
    backgroundColor:'#fcf8e4',
    borderRadius:10,
    color:'#997b43'
  },
  viBooks_content:{
    flex:1,
    backgroundColor:'#d3eeff',
    borderRadius:10
  },
  stationery_content:{
    flex:1,
    backgroundColor:'#fff1f1',
    borderRadius:10
  },
  souvenir_content:{
    flex:1,
    backgroundColor:'#e7f8f1',
    borderRadius:10
  },
  enBooks_header:{
    flex:4,
  },
  enBooks_img_container:{
    flex:5,
    flexDirection:'row',
    marginBottom:10
  },
  enBooks_img_item:{
    height:'100%',
    width:'100%',
    flex:1
  },
  categories_img:{
    height:'100%',
    width:'130%'
  },
  cate_text_header:{
    fontFamily:'AntDesign',
    fontSize:16,
    paddingTop:10,
    paddingLeft:10,
    color:'#997b43',
    fontWeight:'bold'
    //color:#515f9d,#ad1913,#246223
  },
  cate_text_content:{
    paddingTop:5,
    paddingLeft:10,
    color:'#997b43'
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