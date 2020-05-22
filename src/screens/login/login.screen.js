import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        state:{
            checkLogin=false;
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.groupTop}>
                    <View style={styles.userName}>
                        <TextInput
                            style={styles.inputUserName}
                            placeholder="Email/Số điện thoại"
                            clearButtonMode="always"
                        />
                    </View>
                    <View style={styles.passWord}>
                        <TextInput
                            style={styles.inputPassWord}
                            placeholder="Mật khẩu"
                            clearButtonMode="always"
                            secureTextEntry={true}
                        />                    
                    </View>
                    <View style={styles.btnLoginContainer}>
                        <TouchableOpacity style={styles.btnLogin} onPress={()=>{this.props.navigation.navigate('Home')}}>
                            <Text style={{color:'white',fontSize:18}}>
                                ĐĂNG NHẬP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.groupBottom}>

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
    groupTop:{
        flex:1,
    },
    userName:{
        paddingVertical:30
    },
    passWord:{

    },
    inputPassWord:{
        borderBottomColor:'rgb(24, 158, 255)',
        borderBottomWidth:1,
        width:'90%',
        alignSelf:'center'
    },
    inputUserName:{
        borderBottomColor:'rgb(24, 158, 255)',
        borderBottomWidth:1,
        width:'90%',
        alignSelf:'center'
    },
    groupBottom:{
        flex:1,
    },
    btnLoginContainer:{

    },
    btnLogin:{
        height:50,
        backgroundColor:'#f1172f',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        alignSelf:'center',
        marginTop:60
    }
})

