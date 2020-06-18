import React, { Component } from 'react';
import { Text, View ,StyleSheet, TouchableWithoutFeedbackBase} from 'react-native';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import {getAPIFromServer} from '../../networking/getAPI';

class OrderScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            order:[],
            userId:props.route.params.userId,
            groupId:props.route.params.groupid,
        };

    }
    
    componentDidMount(){
        this._getUserInfo = this.props.navigation.addListener('focus', () => {
            // check token 
            this.getUserInfo();
            this.refreshDataFromServer()
        });
    }

    getUserInfo=async ()=>{
        await AsyncStorage.getItem('userid').then((userid)=>{
            this.setState({userId:userid});
            console.log(userid);
        })
    }
    refreshDataFromServer = () => {
        let API='http://mybook.maitrongvinh.tk/index.php/order/getorderbyuserid/'+this.state.userId;
        if(this.state.groupId==1){
            API='http://mybook.maitrongvinh.tk/index.php/order/';
        }
        getAPIFromServer(API)
          .then(order => {
            console.log(this.state.userId);
            this.setState({order: order});
          })
          .catch(error => {
            this.setState({order: []});
          });
    };

    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                {/* <View style={styles.header}>
                    <Text style={{fontSize:18,color:'#4e5552'}}>Đơn hàng trước</Text>
                </View> */}
                <FlatList
                    data={this.state.order}
                    ref={'flashlist'}
                    renderItem={(item)=>{
                            console.log(item);
                            return(
                                <View>
                                    <View style={styles.itemContainer}>
                                        <Text style={{fontSize:16,fontFamily:'Roboto-Bold',fontWeight:'200',marginBottom:20}}>
                                            #{item.item.OrderId}
                                        </Text>

                                        <Text style={{marginBottom:20}}>
                                            {item.item.AddedDate}  |  {item.item.Sum}đ
                                        </Text>
                                        <TouchableOpacity style={{justifyContent:"center",paddingVertical:10,alignItems:'center',borderWidth:1,borderRadius:5}} onPress={()=>{this.props.navigation.navigate('OrderItems',{OrderId:item.item.OrderId})}}>
                                            <Text>
                                                XEM CHI TIẾT
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{height:10,backgroundColor:'#f7f5f6'}}>

                                    </View>
                                </View>
                            );
                        }
                    }
                    keyExtractor={item => item.OrderId}
                />
            </View>
        )
    }
}
export default OrderScreen;
const styles=StyleSheet.create({
    header:{
        height:40,
        backgroundColor:'#dae4ee',
        padding:20,
        justifyContent:'center'
    },
    container:{

    },
    itemContainer:{
        padding:20
    }
})