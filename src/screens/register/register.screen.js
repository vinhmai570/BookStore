import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,TextInput } from 'react-native'

const URL='http://mybook.maitrongvinh.tk/index.php/register';

export default class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            userName:'',
            passWord:'',
            fullName:''
        }
    }
    ValidateEmail=(email) =>
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return (true)
        }
        // alert("You have entered an invalid email address!")
        return (false)
    }
    register=(email,username,password,fullname)=>{
        if(email==''||username==''||password==''||fullname==''){
            alert("Vui lòng nhập đủ thông tin!")
        }
        else{
            email=email.trim();
            if(this.ValidateEmail(email)){
                username=username.trim();
                password=password.trim();
                fullname=fullname.trim();
                fetch(URL,{method:"POST",body:JSON.stringify({Email:email,UserName:username,PassWord:password,FullName:fullname})})
                .then((response)=>response.text())
                .then((responseData)=>{
                alert(responseData)
                })
                .done()
            }
            else{
                alert('Email không hợp lệ!');
            }
        }
    }
   
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.groupTop}>
                    <View style={{paddingTop:20}}>
                        <TextInput
                            style={styles.inputUserName}
                            placeholder="Email"
                            clearButtonMode="always"
                            onChangeText={(email) => this.setState({email}) } autoFocus={true} onSubmitEditing={()=>{this.refs.username.focus();}}
                            autoFocus={true}
                        />
                    </View>
                    <View style={{paddingVertical:10}}>
                        <TextInput
                            // style={styles.inputUserName}
                            ref={'username'}
                            style={{borderBottomColor:'rgb(24, 158, 255)',
                            borderBottomWidth:1,
                            width:'90%',
                            alignSelf:'center'}}
                            placeholder="UserName"
                            clearButtonMode="always"
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
                            onChangeText={(passWord) => this.setState({passWord}) }onSubmitEditing={()=>{this.refs.fullname.focus();}}
                        />                    
                    </View>
                    <View style={styles.passWord}>
                        <TextInput
                            ref={'fullname'}
                            style={styles.inputPassWord}
                            placeholder="Họ tên"
                            clearButtonMode="always"
                            onChangeText={(fullName) => this.setState({fullName}) }
                        />                    
                    </View>
                    <View style={styles.btnLoginContainer}>
                        <TouchableOpacity style={styles.btnLogin} onPress={()=>this.register(this.state.email,this.state.userName,this.state.passWord,this.state.fullName)}>
                            <Text style={{color:'white',fontSize:18}}>
                                ĐĂNG KÝ
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
        paddingVertical:0
    },
    passWord:{
        paddingBottom:10
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
        marginTop:30
    }
})

