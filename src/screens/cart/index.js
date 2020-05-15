import React, { Component } from 'react';
import { Text, View,StyleSheet, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';


class CartScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity:1,
        }
    }

    countAdd=(quantity)=>{
        quantity+=1;
        this.setState({quantity:quantity});
    }
    countRemove=(quantity)=>{
        if(quantity>1){
            quantity-=1;
        }
        this.setState({quantity:quantity});
    }
    render() {
        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <View style={styles.cartContainer}>
                   {/* CART ITEM */}
                    <View style={styles.cartItem}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/images/products/can_bang_cam_xuc.jpg')} style={styles.productImage} resizeMode={'contain'}/>
                        </View>

                        <View style={styles.detailContainer}>
                            <View style={styles.title}>
                                <Text style={{fontSize:16}} numberOfLines={2}>
                                    Bộ đánh dấu sách kim loại
                                </Text>
                                <Text style={{color:'red'}}>
                                    62.000đ
                                </Text>
                                <Text style={{textDecorationLine: 'line-through',color:'#ccc'}}>
                                    155.000đ
                                </Text>
                            </View>
                            <View style={styles.btnContainer}>
                                <View style={styles.btnCount}>
                                    <TouchableOpacity onPress={()=>
                                        {
                                            this.countRemove(this.state.quantity)
                                        }}>
                                        <Icon name="md-remove" size={23} style={styles.iconRemove}/>
                                    </TouchableOpacity>
                                    <Text style={{height:30,width:40,textAlign:"center",fontSize:20,justifyContent:'center',backgroundColor:'#fffafa'}}>
                                        {this.state.quantity}
                                    </Text>
                                    <TouchableOpacity onPress={()=>
                                        {
                                            this.countAdd(this.state.quantity)
                                        }}>
                                        <Icon name="md-add" size={23} style={styles.iconAdd}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* END CART ITEM */}

                    {/* CART ITEM */}
                    <View style={styles.cartItem}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/images/products/can_bang_cam_xuc.jpg')} style={styles.productImage} resizeMode={'contain'}/>
                        </View>

                        <View style={styles.detailContainer}>
                            <View style={styles.title}>
                                <Text style={{fontSize:16}} numberOfLines={2}>
                                    Bộ đánh dấu sách kim loại
                                </Text>
                                <Text style={{color:'red'}}>
                                    62.000đ
                                </Text>
                                <Text style={{textDecorationLine: 'line-through',color:'#ccc'}}>
                                    155.000đ
                                </Text>
                            </View>
                            <View style={styles.btnContainer}>
                                <View style={styles.btnCount}>
                                    <TouchableOpacity onPress={()=>
                                        {
                                            this.countRemove(this.state.quantity)
                                        }}>
                                        <Icon name="md-remove" size={23} style={styles.iconRemove}/>
                                    </TouchableOpacity>
                                    <Text style={{height:30,width:40,textAlign:"center",fontSize:20,justifyContent:'center',backgroundColor:'#fffafa'}}>
                                        {this.state.quantity}
                                    </Text>
                                    <TouchableOpacity onPress={()=>
                                        {
                                            this.countAdd(this.state.quantity)
                                        }}>
                                        <Icon name="md-add" size={23} style={styles.iconAdd}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* END CART ITEM */}

                    {/* CART ITEM */}
                    <View style={styles.cartItem}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/images/products/can_bang_cam_xuc.jpg')} style={styles.productImage} resizeMode={'contain'}/>
                        </View>

                        <View style={styles.detailContainer}>
                            <View style={styles.title}>
                                <Text style={{fontSize:16}} numberOfLines={2}>
                                    Bộ đánh dấu sách kim loại
                                </Text>
                                <Text style={{color:'red'}}>
                                    62.000đ
                                </Text>
                                <Text style={{textDecorationLine: 'line-through',color:'#ccc'}}>
                                    155.000đ
                                </Text>
                            </View>
                            <View style={styles.btnContainer}>
                                <View style={styles.btnCount}>
                                    <TouchableOpacity onPress={()=>
                                        {
                                            this.countRemove(this.state.quantity)
                                        }}>
                                        <Icon name="md-remove" size={23} style={styles.iconRemove}/>
                                    </TouchableOpacity>
                                    <Text style={{height:30,width:40,textAlign:"center",fontSize:20,justifyContent:'center',backgroundColor:'#fffafa'}}>
                                        {this.state.quantity}
                                    </Text>
                                    <TouchableOpacity onPress={()=>
                                        {
                                            this.countAdd(this.state.quantity)
                                        }}>
                                        <Icon name="md-add" size={23} style={styles.iconAdd}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* END CART ITEM */}

                    
                    <View style={{height:55,backgroundColor:'#eb5030',borderRadius:5,margin:10,justifyContent:'center'}}>
                        <TouchableOpacity style={{width:"100%",height:"100%",justifyContent:'center'}}>
                            <Text style={{color:'white',textAlign:'center',fontSize:20,justifyContent:'center'}}>
                                Thanh toán
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default CartScreen;

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
        backgroundColor:'blue'
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