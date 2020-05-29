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

const ProductItem = ({image, name, price,discount}) => (
  <View style={styles.itemContainer}>
    <Image
      source={{uri: 'http://mybook.maitrongvinh.tk/' + image}}
      style={styles.productImage}
    />
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemPrice}>{price}</Text>
    <Text style={{color:'#ccc',textDecorationLine: 'line-through'}}>{discount}</Text>
  </View>
);


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsFromServer: [],
    };
  }
  // _isMounted = false;
  componentDidMount() {
    // this._isMounted=true;
    this.refreshDataFromServer();
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
            <TouchableOpacity style={styles.productViewAll} onPress={()=>{this.props.navigation.navigate('ListProducts')}}>
              <Text style={{fontSize:18,color:'white', paddingHorizontal:20}}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.productsTop}
            ref={'flashlist'}
            data={this.state.productsFromServer}
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
                <TouchableOpacity style={{flex: 1}}>
                  <View style={styles.cateItem_header}>
                    <Text style={styles.cateText_header}>English Books</Text>
                    <Text style={styles.cateText_content}>15 Sản phẩm</Text>
                  </View>
                  <View style={styles.enBooksImg_container}>
                    <Image
                      source={require('../../assets/images/categories/enBooks_1.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImg_item}
                    />
                    <Image
                      source={require('../../assets/images/categories/enBooks_2.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImg_item}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.viBooksContainer}>
              <View style={styles.viBooksContent}>
                <TouchableOpacity style={{flex: 1}}>
                  <View style={styles.cateItem_header}>
                    <Text style={[styles.cateText_header, {color: '#515f9d'}]}>
                      Sách Tiếng Việt
                    </Text>
                    <Text
                      style={[styles.cateText_content, {color: '#515f9d'}]}>
                      19 Sản phẩm
                    </Text>
                  </View>
                  <View style={styles.enBooksImg_container}>
                    <Image
                      source={require('../../assets/images/categories/viBooks_1.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImg_item}
                    />
                    <Image
                      source={require('../../assets/images/categories/viBooks_2.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImg_item}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.categoriesBot}>
            <View style={styles.stationeryContainer}>
              <View style={styles.stationeryContent}>
                <TouchableOpacity style={{flex: 1}}>
                  <View style={styles.cateItem_header}>
                    <Text style={[styles.cateText_header, {color: '#ad1913'}]}>
                      Văn phòng phẩm
                    </Text>
                    <Text
                      style={[styles.cateText_content, {color: '#ad1913'}]}>
                      25 Sản phẩm
                    </Text>
                  </View>
                  <View style={styles.enBooksImg_container}>
                    <Image
                      source={require('../../assets/images/categories/stationery_1.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImg_item}
                    />
                    <Image
                      source={require('../../assets/images/categories/stationery_2.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImg_item}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.souvenirContainer}>
              <View style={styles.souvenirContent}>
                <TouchableOpacity style={{flex: 1}}>
                  <View style={styles.cateItem_header}>
                    <Text style={[styles.cateText_header, {color: '#246223'}]}>
                      Quà lưu niệm
                    </Text>
                    <Text
                      style={[styles.cateText_content, {color: '#246223'}]}>
                      43 Sản phẩm
                    </Text>
                  </View>
                  <View style={styles.enBooksImg_container}>
                    <Image
                      source={require('../../assets/images/categories/souvenir_1.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImg_item}
                    />
                    <Image
                      source={require('../../assets/images/categories/souvenir_2.jpg')}
                      resizeMode={'contain'}
                      style={styles.enBooksImg_item}
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
            <TouchableOpacity style={styles.productViewAll} onPress={()=>{this.props.navigation.navigate('ListProducts')}}>
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
  productViewAll:{
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
  enBooksImg_container: {
    flex: 5,
    flexDirection: 'row',
    marginBottom: 10,
  },
  enBooksImg_item: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  categoriesImg: {
    height: '100%',
    width: '130%',
  },
  cateText_header: {
    fontFamily: 'AntDesign',
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 10,
    color: '#997b43',
    fontWeight: 'bold',
    //color:#515f9d,
  },
  cateText_content: {
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
