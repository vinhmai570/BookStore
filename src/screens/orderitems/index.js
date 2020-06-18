import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

import {getAPIFromServer} from '../../networking/getAPI';
import { FlatList, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

const apiGetOrderItems='http://mybook.maitrongvinh.tk/index.php/order/getorderitems/';
const apiGetProductByID='http://mybook.maitrongvinh.tk/index.php/getproducts/getproductbyid/';

export default class OrderItemsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            orderId:props.route.params.OrderId,
            orderItems:[],
            productItems:[]
        }
    }
    componentDidMount(){    
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getAPIFromServer(apiGetOrderItems+this.state.orderId)
          .then(orderItems => {
            // console.log(orderItems);
            this.setState({orderItems: orderItems});
            orderItems.map((item)=>{
                getAPIFromServer(apiGetProductByID+item.ProdId)
                .then((product)=>{
                        this.setState({productItems:this.state.productItems.concat(product)});
                    }
                )
            })
          })
          .catch(error => {
            this.setState({orderItems: []});
          });
    };
    checkProduct=()=>{
        this.state.productItems.map((item)=>{
            console.log(item);
        })
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                
                <FlatList
                    data={this.state.productItems}
                    ref={'flashlist'}
                    renderItem={(item)=>{
                            console.log(item);
                            return(
                                <TouchableOpacity style={styles.cartItem} onPress={()=>{this.props.navigation.navigate('Details',{id:item.item.ProdId})}}> 
                                    <View style={styles.imageContainer}>
                                        <Image source={{uri: 'http://mybook.maitrongvinh.tk/' + item.item.ImageURL}} style={styles.productImage} resizeMode={'contain'}/>
                                    </View>

                                    <View style={styles.detailContainer}>
                                        <View style={[styles.title,{flexDirection:'row'}]}>
                                            <View style={styles.title}>
                                                <Text style={{fontSize:16}} numberOfLines={2}>
                                                    {item.item.ProdName}
                                                </Text>
                                                <Text style={{color:'red'}}>
                                                {item.item.Price}
                                                </Text>
                                                <Text style={{textDecorationLine: 'line-through',color:'#ccc'}}>
                                                    {parseInt(item.item.Price)+parseInt(item.item.Price*item.item.Discount/100)}
                                                </Text>
                                               
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }
                    }
                    keyExtractor={item => item.ProdId}
                />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    cartContainer:{
        height:400,
        backgroundColor:'white',
        flex:1
    },
    cartItem:{
        height:150,
        flexDirection:'row',
        borderBottomColor:'black',
        borderBottomWidth:0.2,
        paddingVertical:10
    },
    imageContainer:{
        flex:2  ,
        backgroundColor:'white',
    },
    productImage:{
       width:'75%',
       height:'75%'
    },
    detailContainer:{
        flex:4,
        backgroundColor:'blue',
      
    },
    title:{
        flex:3,
        backgroundColor:'white'
    },
    btnContainer:{
        flex:1,
        backgroundColor:'white',
    },
    btnCount:{
        flexDirection:'row',
        width:90,
        height:30,
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    iconRemove:{
        backgroundColor:'#f7f7f7',
        paddingVertical:2,
        paddingHorizontal:5
    },
    iconAdd:{
        backgroundColor:'#f7f7f7',
        paddingVertical:2,
        paddingHorizontal:5
    }

});