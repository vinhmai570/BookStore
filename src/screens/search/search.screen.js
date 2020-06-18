import React, { Component } from 'react';
import { Text,
     View,
     StyleSheet,
     Dimensions,
     ScrollView,  
     Image,
     TouchableOpacity,
     FlatList,
     RefreshControl,
     TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {getAPIFromServer} from '../../networking/getAPI.js';
var {height,width}= Dimensions.get("window");

const apiGetAllProducts='http://mybook.maitrongvinh.tk/index.php/getproducts';
const apiSearchByName='http://mybook.maitrongvinh.tk/getproducts/searchproduct/';

const ProductItem = ({image, name, price}) => (
    <View style={styles.product}>
        <View style={styles.imageContainer}>
            <Image source={{uri: 'http://mybook.maitrongvinh.tk/' + image}} style={{width:width/2,height:"100%"}} resizeMode={'cover'}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={{fontSize:16,fontFamily:'Roboto-Medium',marginTop:10,height:40,paddingHorizontal:25}} numberOfLines={2}>{name}</Text>
            <Text style={{color:'red',marginTop:6}}>{price} đ</Text>
        </View>
    </View>
  );
class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing:false,
            productsFromServer: [],
            notfound:''
        };
      }
    componentDidMount() {
        // this._isMounted=true;
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        this.setState({refreshing:true});
        getAPIFromServer(apiGetAllProducts)
        .then(products => {
        this.setState({productsFromServer: products});
        this.setState({refreshing:false});
        })
        .catch(error => {
        this.setState({productsFromServer: []});
        this.setState({refreshing:false});
        });
    };
    onRefresh=()=>{
        this.refreshDataFromServer();
    }
    removeDiacritics=(input)=>
    {
        var output = "";
        var normalized = input.normalize("NFD");
        var i=0;
        var j=0;

        while (i<input.length)
        {
            output += normalized[j];

            j += (input[i] == normalized[j]) ? 1 : 2;
            i++;
        }
        return output;    
    }
    searchByName=(name)=>{
        // console.log(name);
        name=name.trim();
        name=this.removeDiacritics(name);
        if(name!=''){
            this.setState({refreshing:true});
            getAPIFromServer(apiSearchByName+name)
            .then(products => {
            // console.log(products);
            this.setState({productsFromServer: products});
            this.setState({refreshing:false});
            })
            .catch(error => {
            this.setState({productsFromServer: []});
            this.setState({refreshing:false});
            });
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                    {/* HEADER */}
                    <View style={{flex:1}}>
                        <View style={styles.header}>
                            <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={()=>{this.props.navigation.goBack()}}>
                                <Icon name="md-arrow-back" size={25} color="white" />
                            </TouchableOpacity>
                            <View style={styles.searchBar}>
                            <Icon name="md-search" size={25} style={styles.iconSearchBar} />
                            <TextInput
                                style={styles.inputSearchBar}
                                placeholder="Bạn cần tìm sách gì?"
                                clearButtonMode="always"
                                // onSubmitEditing={(name)=>{this.searchByName(name)}}
                                onChangeText={(name) => this.searchByName(name) }
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
                    <View style={styles.container}>
                         <View>
                            <Text style={{fontSize:20,textAlign:'center',justifyContent:'center'}}>
                                {this.state.notfound}
                            </Text>
                        </View>
                        <FlatList
                            style={[styles.productsTop,{flexWrap:'wrap',width:width,flexDirection:'row'}]}
                            ref={'flashlist'}
                            data={this.state.productsFromServer}
                            renderItem={item => {
                            //   console.log(`Item = ${JSON.stringify(item.item.ImageURL)}, index=${JSON.stringify(item.index)}`);
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
                            numColumns={2}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.onRefresh}
                                />
                            }
                            showsHorizontalScrollIndicator={false}
                        />
                        
                    </View>
            </View>
        )
    }
}
export default SearchScreen;
const styles=StyleSheet.create({
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
    container:{
        flex:10,
        flexDirection:"row",
        flexWrap:'wrap',
        backgroundColor:'white',
        paddingTop:20
    },
    product:{
        width:width/2,
        height:height/2-50,
        alignContent:'flex-start'
    },
    imageContainer:{
        flex:3
    },
    textContainer:{
        flex:2,
        alignItems:'center'
    }
});