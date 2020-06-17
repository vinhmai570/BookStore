import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

class OrderScreen extends Component {
    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:'white'}}>
                <View style={styles.header}>
                    <Text style={{fontSize:18,color:'#4e5552'}}>Đơn hàng trước</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.itemContainer}>
                        <Text style={{fontSize:16,fontFamily:'Roboto-Bold',fontWeight:'200',marginBottom:20}}>
                             Cân Bằng Cảm Xúc
                        </Text>
                        <Text style={{marginBottom:20}}>
                            1 Món  |  99.000đ
                        </Text>
                        <TouchableOpacity style={{justifyContent:"center",paddingVertical:10,alignItems:'center',borderWidth:1,borderRadius:5}}>
                            <Text>
                                ĐẶT LẠI
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:10,backgroundColor:'#f7f5f6'}}>

                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={{fontSize:16,fontFamily:'Roboto-Bold',fontWeight:'200',marginBottom:20}}>
                             Cân Bằng Cảm Xúc
                        </Text>
                        <Text style={{marginBottom:20}}>
                            1 Món  |  99.000đ
                        </Text>
                        <TouchableOpacity style={{justifyContent:"center",paddingVertical:10,alignItems:'center',borderWidth:1,borderRadius:5}}>
                            <Text>
                                ĐẶT LẠI
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:10,backgroundColor:'#f7f5f6'}}>

                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={{fontSize:16,fontFamily:'Roboto-Bold',fontWeight:'200',marginBottom:20}}>
                             Cân Bằng Cảm Xúc
                        </Text>
                        <Text style={{marginBottom:20}}>
                            1 Món  |  99.000đ
                        </Text>
                        <TouchableOpacity style={{justifyContent:"center",paddingVertical:10,alignItems:'center',borderWidth:1,borderRadius:5}}>
                            <Text>
                                ĐẶT LẠI
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:10,backgroundColor:'#f7f5f6'}}>

                    </View>
                </View>
            </ScrollView>
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