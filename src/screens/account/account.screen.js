import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../login';
import Profile from '../profile';

class AccountScreen extends Component {

    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.welcomeContainer} onPress={()=>{this.props.navigation.navigate('Login')}}>
                        <View style={styles.iconAccountContainer}>
                            <View style={styles.circleIcon}>
                                <Icon name="md-person" size={45} style={{color:'white'}}/>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{color:'gray'}}>
                                Chào mừng bạn đến với MyBook
                            </Text>
                            <Text style={styles.textLogin}>
                                Đăng nhập/Đăng ký
                            </Text>
                        </View>
                        <View style={styles.iconNextContainer}>
                            <Icon name="md-play" size={20} style={{color:'gray'}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:10,backgroundColor:'#f7f7f7'}}></View>
                   
                    <TouchableOpacity style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="md-list" size={25} style={{color:'gray'}}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{fontFamily:'Ronoto-Light',fontWeight:'100'}}>
                                Quản lý đơn hàng
                            </Text>
                        </View>
                        <View style={styles.iconNextContainer}>
                            <Icon name="md-play" size={20} style={{color:'gray'}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="md-cart" size={25} style={{color:'gray'}}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{fontFamily:'Ronoto-Light'}}>
                                Sản phẩm đã mua
                            </Text>
                        </View>
                        <View style={styles.iconNextContainer}>
                            <Icon name="md-play" size={20} style={{color:'gray'}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="md-eye" size={25} style={{color:'gray'}}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{fontFamily:'Ronoto-Light'}}>
                                Sản phẩm đã xem
                            </Text>
                        </View>
                        <View style={styles.iconNextContainer}>
                            <Icon name="md-play" size={20} style={{color:'gray'}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name="md-heart" size={25} style={{color:'gray'}}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={{fontFamily:'Ronoto-Light'}}>
                                Sản phẩm yêu thích
                            </Text>
                        </View>
                        <View style={styles.iconNextContainer}>
                            <Icon name="md-play" size={20} style={{color:'gray'}}/>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

export default AccountScreen;

const styles=StyleSheet.create({
    welcomeContainer:{
        height:100,
        flexDirection:'row',
        padding:10
    },
    iconAccountContainer:{
        width:80,
        justifyContent:'center',
        alignItems:'center',
            
    },
    circleIcon:{
        color:'white',
        backgroundColor:'rgb(24, 158, 255)',
        width:60,
        height:60,
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        justifyContent:"center",
        alignItems:'flex-start',
    },
    textLogin:{
        color:'rgb(24, 158, 255)',
        fontSize:18,
        
    },
    iconNextContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        width:50
    },
    itemContainer:{
        height:50,
        flexDirection:'row',
        padding:10,
        borderBottomColor:'gray',
        borderBottomWidth:0.2
    },
    iconContainer:{
        width:50,
        justifyContent:'center',
        alignItems:'center',
    },
});