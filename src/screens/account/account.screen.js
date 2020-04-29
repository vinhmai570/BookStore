import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../login';
import Profile from '../profile';

class AccountScreen extends Component {

    render() {
        return (
            <View>
                <View>
                    <Text> Các nhân </Text>

                </View>
                <TouchableOpacity style={styles.login} onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text>Đăng nhập/Đăng ký</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login} onPress={()=>this.props.navigation.navigate('Profile')}>
                    <Text>Thông tin cá nhân</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    login:{
        height:40,
        padding:20
    }

})
export default AccountScreen;
