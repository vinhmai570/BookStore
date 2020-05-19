import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class LoginScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <Icon name="md-close" size={25} color={'#fff'} style={{flex:1,alignItems:'center',justifyContent:'center',paddingStart:20}}/>
                    <View style={{justifyContent:'flex-start',alignItems:'center',width:'90%',alignContent:'flex-start'}}>
                        <Text style={{color:'white',fontSize:20}}>
                            Đăng nhập / Đăng ký
                        </Text>
                    </View>
                </View>
                <View style={styles.body}>

                </View>
            </View>
        )
    }
}
export default LoginScreen;
const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        height:50,
        backgroundColor:'rgb(24, 158, 255)',
        alignItems:'center'
    },
    body:{
        
    }
})