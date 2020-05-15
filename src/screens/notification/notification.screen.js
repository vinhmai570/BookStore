import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class NotificationScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.listContainer}>
                    <View style={styles.itemContainer}>
                        <View style={styles.btnContainer}>
                            <View style={{borderRadius:1000,borderWidth:1,width:'70%',height:'50%',justifyContent:'center',alignItems:'center',borderColor:'#ff4040'}}>
                                <Icon name="md-cash" size={30} style={{color:'#ff4040'}}/>
                            </View>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={{fontFamily:'Roboto-Bold'}}>Khuyến mãi</Text>
                            <Text>Giảm giá 40% tất cả các mặt hàng</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.btnContainer}>
                            <View style={{borderRadius:1000,borderWidth:1,width:'70%',height:'50%',justifyContent:'center',alignItems:'center',borderColor:'#ff4040'}}>
                                <Icon name="md-cash" size={30} style={{color:'#ff4040'}}/>
                            </View>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={{fontFamily:'Roboto-Bold'}}>Khuyến mãi</Text>
                            <Text>Giảm giá 40% tất cả các mặt hàng</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.btnContainer}>
                            <View style={{borderRadius:1000,borderWidth:1,width:'70%',height:'50%',justifyContent:'center',alignItems:'center',borderColor:'#ff4040'}}>
                                <Icon name="md-cash" size={30} style={{color:'#ff4040'}}/>
                            </View>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={{fontFamily:'Roboto-Bold'}}>Khuyến mãi</Text>
                            <Text>Giảm giá 40% tất cả các mặt hàng</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.btnContainer}>
                            <View style={{borderRadius:1000,borderWidth:1,width:'70%',height:'50%',justifyContent:'center',alignItems:'center',borderColor:'#ff4040'}}>
                                <Icon name="md-cash" size={30} style={{color:'#ff4040'}}/>
                            </View>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={{fontFamily:'Roboto-Bold'}}>Khuyến mãi</Text>
                            <Text>Giảm giá 40% tất cả các mặt hàng</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.btnContainer}>
                            <View style={{borderRadius:1000,borderWidth:1,width:'70%',height:'50%',justifyContent:'center',alignItems:'center',borderColor:'#ff4040'}}>
                                <Icon name="md-cash" size={30} style={{color:'#ff4040'}}/>
                            </View>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={{fontFamily:'Roboto-Bold'}}>Khuyến mãi</Text>
                            <Text>Giảm giá 40% tất cả các mặt hàng</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export default NotificationScreen;

const styles=StyleSheet.create({
    listContainer:{
        flex:1,
        backgroundColor:'white'
    },
    itemContainer:{
        height:80,
        flexDirection:'row',
        borderBottomWidth:0.5,
        alignItems:'center'
    },  
    contentContainer:{
        flex:5,
        backgroundColor:'white'
    },
    btnContainer:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }
});