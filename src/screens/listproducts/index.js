import React, { Component } from 'react';
import { Text,
     View,
     StyleSheet,
     Dimensions,
     ScrollView,  
     Image,
     TouchableOpacity,
     FlatList
} from 'react-native';
import {getProductsFromServer} from '../../networking/getProducts.js';
var {height,width}= Dimensions.get("window");

const ProductItem = ({image, name, price}) => (
    <View style={styles.product}>
        <View style={styles.imageContainer}>
            <Image source={{uri: 'http://mybook.maitrongvinh.tk/' + image}} style={{width:width/2,height:"100%"}} resizeMode={'cover'}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={{fontSize:16,fontFamily:'Roboto-Medium',marginTop:10,height:40}} numberOfLines={2}>{name}</Text>
            <Text style={{color:'red',marginTop:6}}>{price} đ</Text>
        </View>
    </View>
  );
class ListProductsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          productsFromServer: [],
        };
      }
    componentDidMount() {
        // this._isMounted=true;
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getProductsFromServer()
        .then(products => {
        this.setState({productsFromServer: products});
        })
        .catch(error => {
        this.setState({productsFromServer: []});
        });
    };
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        {/* <View style={styles.product}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../../assets/images/products/can_bang_cam_xuc.jpg')} resizeMode={'cover'} style={{width:width/2,height:"100%"}}/>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={{fontSize:16,fontFamily:'Roboto-Medium',marginTop:10}}>Cân Bằng Cảm Xúc</Text>
                                <Text style={{color:'red',marginTop:6}}>99000 đ</Text>
                            </View>
                        </View> */}
                        <FlatList
                            style={[styles.productsTop,{flexWrap:'wrap',width:width,flexDirection:'row'}]}
                            ref={'flashlist'}
                            data={this.state.productsFromServer}
                            renderItem={item => {
                            //   console.log(`Item = ${JSON.stringify(item.item.ImageURL)}, index=${JSON.stringify(item.index)}`);
                            return (
                                <TouchableOpacity  onPress={() => {this.props.navigation.navigate('Details')}}>
                                    <ProductItem
                                    image={item.item.ImageURL}
                                    name={item.item.ProdName}
                                    price={item.item.Price}
                                    parentFlashlist={this}
                                    
                                    />
                                </TouchableOpacity>
                            );
                            }}
                            keyExtractor={item => item.ProdId}
                            numColumns={2}
                        />
                        
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default ListProductsScreen;
const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        flexWrap:'wrap',
        backgroundColor:'white',
        paddingTop:20
    },
    product:{
        width:width/2,
        height:height/2-50,
        alignContent:'flex-start'
    },
    imageContainer:{
        flex:3
    },
    textContainer:{
        flex:2,
        alignItems:'center'
    }
});