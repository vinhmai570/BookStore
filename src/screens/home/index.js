import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

var {height, width} = Dimensions.get('window');

import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {getAPIFromServer} from '../../networking/getAPI.js';
// LINK API - DATA:JSON
const apiGetAllProducts='http://mybook.maitrongvinh.tk/index.php/getproducts';
const apiGetProductByDiscount='http://mybook.maitrongvinh.tk/index.php/getproducts/getproductbydiscount';
const apiCountProductByGroup1='http://mybook.maitrongvinh.tk/index.php/getproducts/countProductByCateId/1';
const apiCountProductByGroup2='http://mybook.maitrongvinh.tk/index.php/getproducts/countProductByCateId/2';
const apiCountProductByGroup3='http://mybook.maitrongvinh.tk/index.php/getproducts/countProductByCateId/3';
const apiCountProductByGroup4='http://mybook.maitrongvinh.tk/index.php/getproducts/countProductByCateId/4';
const ProductItem = ({image, name, price,discount}) => (
  <View style={styles.itemContainer}>
    <Image
      source={{uri: 'http://mybook.maitrongvinh.tk/' + image}}
      style={styles.productImage}
    />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemPrice}>{price} đ</Text>
    <Text style={{color:'#ccc',textDecorationLine: 'line-through'}}>{discount} đ</Text>
  </View>
);


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsFromServer: [],
      isFocusSearchBar:false,
      productsByDiscount:[],
      countGroup1:0,
      countGroup2:0,
      countGroup3:0,
      countGroup4:0,
    };
  }
  // _isMounted = false;
  componentDidMount() {
    // this._isMounted=true;
    this.refreshDataFromServer();
    this.refreshDataFromServerByDiscount();
    this.countProductByGroup1();
    this.countProductByGroup2();
    this.countProductByGroup3();
    this.countProductByGroup4();
  }
  // componentWillUnmount(){
  //   this._isMounted=false;
  // }
  refreshDataFromServer = () => {
    getAPIFromServer(apiGetAllProducts)
      .then(products => {
        this.setState({productsFromServer: products});
      })
      .catch(error => {
        this.setState({productsFromServer: []});
      });
  };
  refreshDataFromServerByDiscount = () => {
    getAPIFromServer(apiGetProductByDiscount)
      .then(products => {
        this.setState({productsByDiscount: products});
      })
      .catch(error => {
        this.setState({productsByDiscount: []});
      });
  };
  countProductByGroup1=()=>{
    getAPIFromServer(apiCountProductByGroup1)
      .then(count => {
        this.setState({countGroup1: count});
      })
      .catch(error => {
        this.setState({countGroup1: 0});
      });
  };
  countProductByGroup2=()=>{
    getAPIFromServer(apiCountProductByGroup2)
      .then(count => {
        this.setState({countGroup2: count});
      })
      .catch(error => {
        this.setState({countGroup2: 0});
      });
  }
  countProductByGroup3=()=>{
    getAPIFromServer(apiCountProductByGroup3)
      .then(count => {
        this.setState({countGroup3: count});
      })
      .catch(error => {
        this.setState({countGroup3: 0});
      });
  }
  countProductByGroup4=()=>{
    getAPIFromServer(apiCountProductByGroup4)
      .then(count => {
        this.setState({countGroup4: count});
      })
      .catch(error => {
        this.setState({countGroup4: 0});
      });
  }
  discounted=(price,discount)=>{
    return parseInt(price)+parseInt(price*discount/100);
  }

  render() {
    return (
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View>
          <View style={styles.header}>
            <View style={styles.searchBar}>
              <Icon name="md-search" size={25} style={styles.iconSearchBar} />
              <TextInput
                style={styles.inputSearchBar}
                placeholder="Bạn cần tìm sách gì?"
                clearButtonMode="always"
                onFocus={()=>{this.setState({isFocusSearchBar:true})}}
              />
            </View>
            <View style={styles.cart}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Cart')}>
                <Icon name="md-cart" size={30} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* END HEADER */}
        {/* SWIPER */}
        <View>
          <Swiper
            style={{height: 200}}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}>
            <View>
              <Image
                source={require('../../assets/images/banners/banner1.jpg')}/>
            </View>
            <View>
              <Image
                source={require('../../assets/images/banners/banner2.jpg')}/>
            </View>
            <View>
              <Image
                source={require('../../assets/images/banners/banner3.jpg')}/>
            </View>
            <View>
              <Image
                source={require('../../assets/images/banners/banner4.jpg')} />
            </View>
          </Swiper>
        </View>
        {/* END SWIPER */}

        {/* ALL PRODUCTS */}
        <View style={styles.allProducts}>
          <View style={styles.productsHeader}>
            <Text style={styles.productsText}>Sản phẩm giảm giá</Text>
            <TouchableOpacity style={styles.btnViewAllProduct} onPress={()=>{this.props.navigation.navigate('ListProductsByGroup',{linkAPI:'http://mybook.maitrongvinh.tk/index.php/getproducts/getproductbydiscount'})}}>
              <Text style={{fontSize:18,color:'white', paddingHorizontal:20}}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.productsTop}
            ref={'flashlist'}
            data={this.state.productsByDiscount}
            renderItem={item => {
              //  console.log(`Item = ${JSON.stringify(item.item)}, index=${JSON.stringify(item.index)}`);
              return (
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Details',{id:item.item.ProdId})}} >
                  {/* ) console.log(item.item.ProdId)*/}
                  <ProductItem
                  image={item.item.ImageURL}
                  name={item.item.ProdName}
                  price={item.item.Price}
                  parentFlashlist={this}
                  discount={this.discounted(item.item.Price,item.item.Discount)}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.ProdId}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* END ALL PRODUCTS */}

        {/* CATEGORIES */}
        <View style={{height: 40}}>
          <Text style={{height: 40, fontSize: 15, padding: 10}}>
            Mua sắm theo danh mục
          </Text>
        </View>
        <View style={styles.categories}>
          <View style={styles.categoriesTop}>
            <View style={styles.enBooksContainer}>
              <View style={styles.enBooksContent}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>{this.props.navigation.navigate('ListProductsByGroup',{linkAPI:'http://mybook.maitrongvinh.tk/index.php/getproducts/getproductbycate/1'})}}>
                  <View style={styles.cateItemHeader}>
                    <Text style={styles.cateTextHeader}>English Books</Text>
                    <Text style={styles.cateTextContent}>{this.state.countGroup1} Sản phẩm</Text>
                  </View>
                  <View style={styles.enBooksImgContainer}>
                    <Image
                      source={require('../../assets/images/categories/enBooks_1.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImgItem}
                    />
                    <Image
                      source={require('../../assets/images/categories/enBooks_2.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImgItem}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.viBooksContainer}>
              <View style={styles.viBooksContent}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>{this.props.navigation.navigate('ListProductsByGroup',{linkAPI:'http://mybook.maitrongvinh.tk/index.php/getproducts/getproductbycate/2'})}}>
                  <View style={styles.cateItemHeader}>
                    <Text style={[styles.cateTextHeader, {color: '#515f9d'}]}>
                      Sách Tiếng Việt
                    </Text>
                    <Text
                      style={[styles.cateTextContent, {color: '#515f9d'}]}>
                      {this.state.countGroup2} Sản phẩm
                    </Text>
                  </View>
                  <View style={styles.enBooksImgContainer}>
                    <Image
                      source={require('../../assets/images/categories/viBooks_1.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImgItem}
                    />
                    <Image
                      source={require('../../assets/images/categories/viBooks_2.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImgItem}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.categoriesBot}>
            <View style={styles.stationeryContainer}>
              <View style={styles.stationeryContent}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>{this.props.navigation.navigate('ListProductsByGroup',{linkAPI:'http://mybook.maitrongvinh.tk/index.php/getproducts/getproductbycate/3'})}}>
                  <View style={styles.cateItem_header}>
                    <Text style={[styles.cateTextHeader, {color: '#ad1913'}]}>
                      Văn phòng phẩm
                    </Text>
                    <Text
                      style={[styles.cateTextContent, {color: '#ad1913'}]}>
                      {this.state.countGroup3} Sản phẩm
                    </Text>
                  </View>
                  <View style={styles.enBooksImgContainer}>
                    <Image
                      source={require('../../assets/images/categories/stationery_1.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImgItem}
                    />
                    <Image
                      source={require('../../assets/images/categories/stationery_2.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImgItem}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.souvenirContainer}>
              <View style={styles.souvenirContent}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>{this.props.navigation.navigate('ListProductsByGroup',{linkAPI:'http://mybook.maitrongvinh.tk/index.php/getproducts/getproductbycate/4'})}}>
                  <View style={styles.cateItem_header}>
                    <Text style={[styles.cateTextHeader, {color: '#246223'}]}>
                      Quà lưu niệm
                    </Text>
                    <Text
                      style={[styles.cateTextContent, {color: '#246223'}]}>
                      {this.state.countGroup4} Sản phẩm
                    </Text>
                  </View>
                  <View style={styles.enBooksImgContainer}>
                    <Image
                      source={require('../../assets/images/categories/souvenir_1.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImgItem}
                    />
                    <Image
                      source={require('../../assets/images/categories/souvenir_2.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImgItem}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
        </View>
        {/* END CATEGORIES */}
        {/* ALL PRODUCTS */}
        <View style={styles.allProducts}>
          <View style={styles.productsHeader}>
            <Text style={styles.productsText}>Tất cả sản phẩm</Text>
            <TouchableOpacity style={styles.btnViewAllProduct} onPress={()=>{this.props.navigation.navigate('ListProducts')}}>
              <Text style={{fontSize:18,color:'white', paddingHorizontal:20}}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
          <FlatList
            style={styles.productsTop}
            ref={'flashlist'}
            data={this.state.productsFromServer}
            renderItem={item => {
              //  console.log(`Item = ${JSON.stringify(item.item)}, index=${JSON.stringify(item.index)}`);
              return (
                <TouchableOpacity  onPress={() => {this.props.navigation.navigate('Details',{id:item.item.ProdId})}}>
                  <ProductItem
                  image={item.item.ImageURL}
                  name={item.item.ProdName}
                  price={item.item.Price}
                  discount={this.discounted(item.item.Price,item.item.Discount)}
                  parentFlashlist={this}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.ProdId}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={2}
          />
          </ScrollView>
        </View>
        {/* END ALL PRODUCTS */}

      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'rgb(24, 158, 255)',
    
  },
  searchBar: {
    flex: 7,
    alignItems: 'flex-start',
    position: 'relative',
    justifyContent:'space-around',
    zIndex: 1,
    borderColor: 'gray',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    backgroundColor:'white',
  },
  iconSearchBar: {
    bottom: 0,
  },
  inputSearchBar: {
    flex: 6,
    position: 'absolute',
    marginLeft: 30,
    
    height: 40,
    width: (width * 6) / 8 + 5,
  },
  cart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  products: {
    height: height / 2,
    flexDirection: 'row',
  },
  productsTop:{
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    backgroundColor:'white',
    paddingLeft:15
  },
  productsHeader:{
    flexDirection:'row',
    backgroundColor:'rgb(24, 158, 255)',
    justifyContent:'space-between',
    alignItems:'center'
  },
  btnViewAllProduct:{
    fontSize:20
  },
  productsText:{
    padding:10,
    color:'white',
    fontSize:20,
    fontFamily:'Roboto-Regular'
  },
  
  categories: {
    flex: 1,
    height: height / 2,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  itemContainer: {
    width: 100,
    height:210,
    marginRight: 12,
    marginTop: 10,
  },
  categoriesTop: {
    flex: 8,
    flexDirection: 'row',
  },
  categoriesBot: {
    flex: 9,
    flexDirection: 'row',
  },
  enBooksContainer: {
    width: '50%',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 5,
  },
  viBooksContainer: {
    width: '50%',
    paddingLeft: 5,
    paddingRight: 10,
    justifyContent: 'center',
  },
  stationeryContainer: {
    width: '50%',
    padding: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 5,
  },
  souvenirContainer: {
    width: '50%',
    padding: 10,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 10,
  },
  enBooksContent: {
    flex: 1,
    backgroundColor: '#fcf8e4',
    borderRadius: 10,
    color: '#997b43',
  },
  viBooksContent: {
    flex: 1,
    backgroundColor: '#d3eeff',
    borderRadius: 10,
  },
  stationeryContent: {
    flex: 1,
    backgroundColor: '#fff1f1',
    borderRadius: 10,
  },
  souvenirContent: {
    flex: 1,
    backgroundColor: '#e7f8f1',
    borderRadius: 10,
  },
  cateItem_header: {
    flex: 4,
  },
  enBooksImgContainer: {
    flex: 5,
    flexDirection: 'row',
    marginBottom: 10,
  },
  enBooksImgItem: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  categoriesImg: {
    height: '100%',
    width: '130%',
  },
  cateTextHeader: {
    fontFamily: 'AntDesign',
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 10,
    color: '#997b43',
    fontWeight: 'bold',
    //color:#515f9d,
  },
  cateTextContent: {
    paddingTop: 5,
    paddingLeft: 10,
    color: '#997b43',
  },
  allProducts:{
    paddingBottom:20,
    
    borderBottomWidth:1,
    borderBottomColor:"#fff"
  },
  productImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
    height:40
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
});
