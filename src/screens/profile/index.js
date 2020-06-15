import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            fullname:'',
            groupid:0,
            id:0
        }
    }
    componentDidMount(){
        this.getProfile();
    }
    getProfile=async ()=>{
        await AsyncStorage.getItem('email').then(
            res=>{
                this.setState({email:res});
            }
        );
        
        await AsyncStorage.getItem('fullname').then(
            res=>{
                this.setState({fullname:res});
            }
        );

        await AsyncStorage.getItem('groupid').then(
            res=>{
                this.setState({groupid:res});
            }
        );

        await AsyncStorage.getItem('id').then(
            res=>{
                this.setState({id:res});
            }
        );
    }
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View style={{backgroundColor:'#fcfcfc',height:40,justifyContent:'center',padding:20,borderBottomColor:'gray',borderBottomWidth:0.2}}>
                    <Text style={{fontSize:18}}>Cá nhân</Text>
                </View>
                <View style={{padding:20}}>
                    <Text>Họ tên</Text>
                    <Text style={{fontSize:18}}>{this.state.fullname} </Text>
                </View>
                <View style={{paddingVertical:10,paddingHorizontal:20}}>
                    <Text>Email</Text>
                    <Text style={{fontSize:18}}>{this.state.email}</Text>
                </View>
                
                <TouchableOpacity style={{height:50,backgroundColor:'#eb5030',borderRadius:5,margin:20,justifyContent:'center',alignItems:'center',position:'absolute',bottom:-200}}>
                    <Text style={{fontSize:18,color:'white'}}>LƯU THAY ĐỔI</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default ProfileScreen;