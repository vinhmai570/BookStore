import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


const URLORDER='http://mybook.maitrongvinh.tk/index.php/order/insertorder';
const URLORDERITEM='http://mybook.maitrongvinh.tk/index.php/order/insertitemorder';

export default class CheckOutScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            date:'',
            address:'',
            phoneNumber:'',
            userId:props.route.params.userId,
            sum:props.route.params.sum,
            dataCart:props.route.params.dataCart,
            orderId:0,
            finish:false,
        }
    }
    componentDidMount(){
        this.getTime();
    }
    getTime=()=>{
        let utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        this.setState({date:utc});
    }
    checkCart=()=>{
        console.log("đây la cart:");
        this.state.dataCart.map((item)=>{
            console.log("ID:"+item.product.ProdId);
            console.log("Quantity:"+item.quantity);
        })
        console.log("đây la userid:"+this.state.userId);
        console.log("đây la sum:"+this.state.sum);
        console.log("đây la phone number:"+this.state.phoneNumber);
        console.log("đây la date:"+this.state.date);
        console.log("đây la address:"+this.state.address);
    }
    checkOut= async (userid,phonenumber,address,date,sum,datacart)=>{
        if(phonenumber==''||address==''){
            alert("Vui lòng nhập đủ thông tin!")
        }
        else{
            phonenumber=phonenumber.trim();
            address=address.trim();

            await fetch(URLORDER,{method:"POST",body:JSON.stringify({UserId:userid,AddedDate:date,Address:address,Phone:phonenumber,Sum:sum})})
            .then((response)=>response.json())
            .then((responseData)=>{
                console.log(responseData);
                if(responseData.message=='true'){
                    // alert("Đặt hàng thành công");
                    this.setState({orderId:responseData.orderid});
                    // console.log('ORDERID:'+responseData.orderid);
                    this.state.dataCart.map((item)=>{
                        fetch(URLORDERITEM,{method:"POST",body:JSON.stringify({OrderId:this.state.orderId,ProdId:item.product.ProdId,Quantity:item.quantity})})
                        .then((response)=>response.json())
                        .then((responseData)=>{
                            console.log(responseData.message);
                            if(responseData.message=='true'){
                                this.setState({finish:true});
                            }
                            else{
                                this.setState({finish:false});
                            }

                        })
                    });
                    AsyncStorage.removeItem('cart').then(
                        res => {
                            alert('Đặt hàng thành công')
                            // this.props.navigation.navigate('GroupLogin');
                        }
                    )
                    // if(this.state.finish){
                    //     alert("Đặt hàng thành công");
                    // }
                    // else{
                    //     alert("Lỗi")
                    // }
                }
            })
            .done()

            
            
            
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View>
                    <Text style={{padding:20}}>Địa chỉ</Text>
                    <TextInput 
                        ref={'username'}
                        style={{borderBottomColor:'rgb(24, 158, 255)',
                        borderBottomWidth:1,
                        width:'90%',
                        alignSelf:'center'}}
                        placeholder="Địa chỉ"
                        clearButtonMode="always"
                        onChangeText={(address) => this.setState({address}) }onSubmitEditing={()=>{this.refs.phonenumber.focus();}}
                    />
                </View>
                <View>
                    <Text style={{padding:20}}>Số điện thoại</Text>
                    <TextInput 
                        ref={'phonenumber'}
                        style={{borderBottomColor:'rgb(24, 158, 255)',
                        borderBottomWidth:1,
                        width:'90%',
                        alignSelf:'center'}}
                        placeholder="Số điện thoại"
                        clearButtonMode="always"
                        keyboardType={'numeric'}
                        onChangeText={(phoneNumber) => this.setState({phoneNumber}) }
                    />
                </View>
                <TouchableOpacity onPress={()=>{this.getTime()}} style={{height:50,backgroundColor:'#eb5030',borderRadius:5,margin:10,justifyContent:'center',alignItems:'center',marginTop:30}}
                    onPress={()=>this.checkOut(this.state.userId,this.state.phoneNumber,this.state.address,this.state.date,this.state.sum,this.state.dataCart)}
                >
                    <Text style={{color:'white',fontSize:18}}>XÁC NHẬN ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
