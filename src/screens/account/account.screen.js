import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import Login from '../login';
import Profile from '../profile';

class AccountScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            checkLogin:false,
            fullName:'',
            email:''
        };
    }
    componentDidMount(){
        this._checkToken = this.props.navigation.addListener('focus', () => {
            // check token 
            this.checkToken();
          });
    }
    componentWillUnmount(){
        this._checkToken();
    }
    checkToken = async ()=>{
        await AsyncStorage.getItem('token').then(
            res=>{
                if(res){
                    this.setState({checkLogin:true});
                    // console.log(res);
                }
            }
        );
        //update fullname
        await AsyncStorage.getItem('fullname').then(
            res=>{
                if(res){
                    this.setState({fullName:res});
                }
            }
        );
        //update email
        await AsyncStorage.getItem('email').then(
            res=>{
                if(res){
                    this.setState({email:res});
                }
            }
        )
    }
    logOut = async ()=>{
        let keys = ['token', 'userid','email','fullname','groupid','cart'];
        //remove user info
        await AsyncStorage.multiRemove(keys).then(
            res => {
                this.props.navigation.navigate('GroupLogin');
                this.setState({checkLogin:false});
            }
        )
    }
    checkTokenTest= async ()=>{
        console.log("CLICK");
        await AsyncStorage.getItem('token').then(
            res=>{
                if(res){
                    console.log(res);
                }
            }
        )
    }
    render() {
        if(this.state.checkLogin==true){
            return (
                <View style={{flex:1,backgroundColor:'white'}}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.welcomeContainer} onPress={()=>{this.props.navigation.navigate('Profile')}}>
                            <View style={styles.iconAccountContainer}>
                                <View style={styles.circleIcon}>
                                    <Icon name="md-person" size={45} style={{color:'white'}}/>
                                </View>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={{fontSize:20,color:'rgb(24, 158, 255)'}}>
                                    {this.state.fullName}
                                </Text>
                                <Text style={{color:'gray',fontSize:12}}>
                                    {this.state.email}
                                </Text>
                            </View>
                            <View style={styles.iconNextContainer}>
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
                            </View>
                        </TouchableOpacity>
    
                    </View>
                    <TouchableOpacity onPress={()=>this.logOut()} style={{height:50,backgroundColor:'#eb5030',justifyContent:"center",alignItems:'center',borderRadius:5,margin:10}}>
                        <Text style={{color:'white'}}>
                            ĐĂNG XUẤT
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else{
            return (
                <View style={{flex:1,backgroundColor:'white'}}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.welcomeContainer} onPress={()=>{this.props.navigation.navigate('GroupLogin')}}>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
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
                                <Icon name="md-play" size={15} style={{color:'gray'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <Text onPress={()=>this.checkTokenTest()} >KIEM TRA TOKEN</Text> */}
                </View>
            )
        }
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