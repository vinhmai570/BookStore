import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import { ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {getAPIFromServer} from '../../networking/getAPI.js';


const ProductItem = ({image, name, price}) => (
    <View style={{flex:1}}>
        <View style={styles.header}>

        </View>
        <View>
            <View>
                <Image source={{uri: 'http://mybook.maitrongvinh.tk/' + image}} style={{height:300,width:'100%'}} resizeMode={'contain'}/>
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>
                    FLASH SALE
                </Text>
                <Text style={styles.headerPrice}>
                    {price}
                </Text>
            </View>
            <View>
                <Text style={styles.productTitle}>
                    {name}
                </Text>
            </View>
        </View>
        <TouchableOpacity style={styles.footer}>
            <View style={{flex:1,backgroundColor:'#f1172f',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                <Text style={{color:'white',fontSize:16,fontFamily:'Roboto-Bold'}}>
                    Chọn Mua
                </Text>
            </View>
        </TouchableOpacity> 
    </View>
  );
class DetailsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            productById:[],
            id:props.route.params.id,
        }
    }

    componentDidMount(){
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        const APIItem='http://mybook.maitrongvinh.tk/getproducts/getproductbyid/'+this.state.id;
        getAPIFromServer(APIItem)
          .then(products => {
            this.setState({productById: products});
          })
          .catch(error => {
            console.log(error);
            this.setState({productById: []});
          });
      };

    render() {
        // const dataJSON='[{"ProdId":"3","ProdName":"M\u00f3c kh\u00f3a m\u00e8o con ngoi ng\u00f3p","Des":"M\u00f3c kh\u00f3a m\u00e8o con ngoi ng\u00f3p","Price":"19000","Discount":"0","Quantity":"20","Rate":"5","ImageURL":"upload\/products\/moc_khoa_meo_con_ngoi_ngop.jpg","CateId":"4"}]';
        // const dataJSON=this.state.productById;
        // const data=JSON.parse(dataJSON);
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <FlatList style={{flex:1}} stickyHeaderIndices={[2]}
                data={this.state.productById}
                renderItem={item => {
                    // console.log(`Item = ${JSON.stringify(item.item)}, index=${JSON.stringify(item.index)}`);
                    return(
                        <ProductItem
                            name={item.item.ProdName}
                            price={item.item.Price}
                            image={item.item.ImageURL}
                        />
                        )
                }}
                keyExtractor={item => item.ProdId}
                showsHorizontalScrollIndicator={false}
            />
            </View>
        )
    }
}
export default  DetailsScreen;
const styles=StyleSheet.create({
    header:{

    },
    footer:{
      flex:1,
      backgroundColor:'white',
      padding:10,
      height:60
    },
    headerTitle:{
        backgroundColor:'red',
        padding:10
    },
    headerText:{
        color:'white'
    },
    headerPrice:{
        color:'white'
    },  
    productTitle:{
        padding:10,
        fontFamily:'Roboto-Medium',
        fontWeight:'100',
        fontSize:16
    }
});