import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const URL='http://mybook.maitrongvinh.tk/index.php/login/logintoken';
class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            checkLogin:false,
            userName:'',
            passWord:'',
            token:'...'
        }
    }
    componentDidMount(){
        
    }
    goBack() {
        const { navigation, route } = this.props;
        navigation.goBack();
        route.params.checkLogin({ checkLogin: true });
    }
    logIn= (username,password)=>{
        if(username==""||password==""){
            alert("Vui lòng nhập đủ thông tin!");
        }
        else{
            fetch(URL,{method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({UserName:username,PassWord:password})})
            .then((response)=>response.json())
            .then((responseData)=>{
                if(responseData.token=="ERROR"){
                    alert("Tài khoản không tồn tại")
                }
                else{
                    // alert(responseData.token);
                    console.log(responseData);
                    this.setState({checkLogin:true});
                    AsyncStorage.setItem('token',responseData.token);
                    AsyncStorage.setItem('email',responseData.email);
                    AsyncStorage.setItem('fullname',responseData.fullname);
                    AsyncStorage.setItem('groupid',responseData.groupid);
                    AsyncStorage.setItem('userid',responseData.id);
                    this.props.navigation.navigate('Account');
                }
            })
            .done()
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
                            autoFocus={true}
                            onChangeText={(userName) => this.setState({userName}) }onSubmitEditing={()=>{this.refs.password.focus();}}
                        />
                    </View>
                    <View style={styles.passWord}>
                        <TextInput
                            ref={'password'}
                            style={styles.inputPassWord}
                            placeholder="Mật khẩu"
                            clearButtonMode="always"
                            secureTextEntry={true}
                            onChangeText={(passWord) => this.setState({passWord}) }
                        />                    
                    </View>
                    <View style={styles.btnLoginContainer}>
                        <TouchableOpacity style={styles.btnLogin} onPress={()=>{this.logIn(this.state.userName,this.state.passWord)}}>
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

