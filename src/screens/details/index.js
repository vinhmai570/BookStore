import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native'
import { ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

class DetailsScreen extends Component {
    render() {
        return (
            <ScrollView style={{flex:1}} stickyHeaderIndices={[2]}>
               
                <View style={styles.header}>

                </View>
                <View>
                    <View>
                        <Image source={require('../../assets/images/products/can_bang_cam_xuc.jpg')} style={{height:300,width:'100%'}} resizeMode={'contain'}/>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerText}>
                            FLASH SALE
                        </Text>
                        <Text style={styles.headerPrice}>
                            69000đ
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.productTitle}>
                            Cân bằng cảm xúc
                        </Text>
                    </View>
                </View>
                
                <View style={styles.footer}>
                    <View style={styles.footer}>
                        {/* VIEW LEFT */}
                        <TouchableOpacity style={styles.footerLeft}>
                            <Icon name="md-cart" size={30} color={'white'} />
                        </TouchableOpacity>
                        {/* VIEW RIGHT */}
                        <TouchableOpacity style={styles.footerRight}>
                            <Text>
                                Mua ngay
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
        )
    }
}
export default  DetailsScreen;
const styles=StyleSheet.create({
    header:{

    },
    footer:{
        flex:1,
        flexDirection:'row',
        height:50,
        justifyContent:'flex-end'
    },
    footerLeft:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'red'
    },
    footerRight:{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:"center"
    },
    footerItem1:{
        flex:1,
        backgroundColor:'green'
    },
    footerItem2:{
        flex:1,
        backgroundColor:'red',
        justifyContent:"center",
        alignItems:"center"
    },
    headerTitle:{
        padding:20
    },
    headerText:{

    },
    headerPrice:{

    },  
    productTitle:{
        padding:10
    }
});