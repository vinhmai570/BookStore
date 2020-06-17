import React, { Component } from 'react';
import { Text, View,StyleSheet, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


class CartScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            dataCart:[],
            checkLogIn:false,
            userId:0,
            sum:0,
        };
        this.getSum(0);         

    }
    componentDidMount(){
        this._checkToken = this.props.navigation.addListener('focus', () => {
            // get cart item
            this.getCartItem();
            
            //check login and get userid
            this.checkToken();   
        });
        console.log(this.state.checkLogIn);
        // this.getCartItem();

    }
    getCartItem= async ()=>{
            await AsyncStorage.getItem('cart').then((cart)=>{
                if (cart !== null) {
                  
                  const cartproduct = JSON.parse(cart);
                //   console.log(cartproduct.length);
                  for(let i=0;i<cartproduct.length;i++){
                    //   console.log(cartproduct[i].product.item.ProdId);
                        if(typeof(cartproduct[i])==='object'){
                            for(let j=0;j<cartproduct.length;j++){
                                if(typeof(cartproduct[j])==='object'){
                                    if(i!=j&&typeof(cartproduct[i])==='object'&&typeof(cartproduct[j])==='object'){
                                        if(cartproduct[i].product.ProdId==cartproduct[j].product.ProdId){
                                            if(typeof(cartproduct[i])==='object'&&typeof(cartproduct[j])==='object'){
                                                cartproduct.splice(j,1);
                                                j--;
                                            }
                                            if(typeof(cartproduct[i])==='object'&&typeof(cartproduct[j])==='object'){
                                                // console.log(typeof(cartproduct[i]));
                                                cartproduct[i].quantity++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                  }
                //  console.log(cartproduct.length);
                  this.setState({dataCart:cartproduct});
                  this.getSum(0);         

                }
              })
              .catch((err)=>{
                alert(err)
              })
    }
    countAdd=(item)=>{
       let added=this.state.dataCart;
       for(let i=0;i<added.length;i++){
            if(item.product.ProdId===added[i].product.ProdId){
                added[i].quantity++;
            }
        }
        this.setState({dataCart:added});
        AsyncStorage.getItem('cart').then((datacart)=>{
            if (datacart !== null) {
              const cart = JSON.parse(datacart);
              AsyncStorage.setItem('cart',JSON.stringify(added));
            }
          })
          .catch((err)=>{
            alert(err)
          })
          this.getSum(0);         

    }
    countSubtract=(item)=>{
        let subtracted=this.state.dataCart;
        for(let i=0;i<subtracted.length;i++){
            if(item.product.ProdId===subtracted[i].product.ProdId){
                if(subtracted[i].quantity>1){
                    subtracted[i].quantity--;
                }
            }
        }
        this.setState({dataCart:subtracted});
        AsyncStorage.getItem('cart').then((datacart)=>{
            if (datacart !== null) {
              const cart = JSON.parse(datacart);
              AsyncStorage.setItem('cart',JSON.stringify(subtracted));
            }
          })
          .catch((err)=>{
            alert(err)
          })
          this.getSum(0);         
    }
    removeProduct=(datacart)=>{
        let removed=this.state.dataCart;
        for(let i=0;i<removed.length;i++){
            if(datacart.product.ProdId===removed[i].product.ProdId){
                removed.splice(i,1);
            }
        }
        this.setState({dataCart:removed});
        AsyncStorage.getItem('cart').then((datacart)=>{
            if (datacart !== null) {
              const cart = JSON.parse(datacart);
              AsyncStorage.setItem('cart',JSON.stringify(removed));
            }
          })
          .catch((err)=>{
            alert(err)
          })
          this.getSum(0);         

    }
    checkToken = async ()=>{
        await AsyncStorage.getItem('token').then(
            res=>{
                if(res){
                    this.setState({checkLogIn:true});
                    console.log("Kiem tra dang nhap");
                    console.log(this.state.checkLogIn);
                }
            }
        );
        await AsyncStorage.getItem('userid').then(
            res=>{
                if(res){
                    this.setState({userId:res});
                    // console.log(this.state.userId);
                }
            }
        )
    }
    getSum= async (sum)=>{
        await this.state.dataCart.map((item)=>{
            sum+=parseInt(item.product.Price*item.quantity)+parseInt(item.product.Price*item.product.Discount/100*item.quantity);
            console.log('soluong'+item.quantity);
        })
        await this.setState({sum:sum});
        console.log(sum);
    }
    render() {
        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <View style={styles.cartContainer}>
                   <ScrollView>
                       {
                           this.state.dataCart.map((item)=>{ 
                            //    let sum=0;
                            //    sum+=parseInt(item.product.Price*item.quantity)+parseInt(item.product.Price*item.product.Discount/100);
                           if(item.userId==this.state.userId&&this.state.checkLogIn==true){
                            return(
                                
                                /* CART ITEM */
                                <View style={styles.cartItem} key={item.product.ProdId}>
                                    <View style={styles.imageContainer}>
                                        <Image source={{uri: 'http://mybook.maitrongvinh.tk/' + item.product.ImageURL}} style={styles.productImage} resizeMode={'contain'}/>
                                    </View>
    
                                    <View style={styles.detailContainer}>
                                        <View style={[styles.title,{flexDirection:'row'}]}>
                                            <View style={styles.title}>
                                                <Text style={{fontSize:16}} numberOfLines={2}>
                                                    {/* Bộ đánh dấu sách kim loại */}
                                                    {item.product.ProdName}
                                                </Text>
                                                <Text style={{color:'red'}}>
                                                {item.product.Price*item.quantity}
                                                </Text>
                                                <Text style={{textDecorationLine: 'line-through',color:'#ccc'}}>
                                                    {parseInt(item.product.Price*item.quantity)+parseInt(item.product.Price*item.product.Discount/100*item.quantity)}
                                                </Text>
                                               
                                            </View>
                                            <TouchableOpacity style={{paddingHorizontal:15}} onPress={()=>this.removeProduct(item)}>
                                                    <Icon name="md-close" size={25}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.btnContainer}>
                                            <View style={styles.btnCount}>
                                                <TouchableOpacity onPress={()=>
                                                    {
                                                        this.countSubtract(item)
                                                    }}>
                                                    <Icon name="md-remove" size={23} style={styles.iconRemove}/>
                                                </TouchableOpacity>
                                                <Text style={{height:30,width:40,textAlign:"center",fontSize:20,justifyContent:'center',backgroundColor:'#fffafa'}}>
                                                    {JSON.stringify(item.quantity)}
                                                </Text>
                                                <TouchableOpacity onPress={()=>
                                                    {
                                                        this.countAdd(item)
                                                    }}>
                                                    <Icon name="md-add" size={23} style={styles.iconAdd}/>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                             /* END CART ITEM */
                             )
                           }
                         })
                      
                       }
                    
                   </ScrollView>
                   
                </View>
                <View style={{height:55,backgroundColor:'white',borderRadius:5,marginBottom:30,marginHorizontal:10,justifyContent:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                            <Text style={{color:'#eb5030'}}>Thành tiền</Text>
                    <Text style={{fontSize:18,color:'#eb5030',fontFamily:'Roboto-Bold'}}>{this.state.sum}đ</Text>
                        </View>
                        <TouchableOpacity style={{width:"100%",height:"90%",justifyContent:'center',backgroundColor:'#eb5030'}} 
                        onPress={()=>{if(this.state.dataCart.length>0){this.props.navigation.navigate('CheckOut',{dataCart:this.state.dataCart,userId:this.state.userId,sum:this.state.sum})} else {alert('Không có sản phẩm nào trong giỏ')}
                       }}>
                            <Text style={{color:'white',textAlign:'center',fontSize:20,justifyContent:'center'}}>
                                Tiến hành đặt hàng
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default CartScreen;

const styles=StyleSheet.create({
    cartContainer:{
        height:400,
        backgroundColor:'white',
        flex:1
    },
    cartItem:{
        height:150,
        flexDirection:'row',
        borderBottomColor:'black',
        borderBottomWidth:0.2,
        paddingVertical:10
    },
    imageContainer:{
        flex:2  ,
        backgroundColor:'white',
    },
    productImage:{
       width:'75%',
       height:'75%'
    },
    detailContainer:{
        flex:4,
        backgroundColor:'blue',
      
    },
    title:{
        flex:3,
        backgroundColor:'white'
    },
    btnContainer:{
        flex:1,
        backgroundColor:'white',
    },
    btnCount:{
        flexDirection:'row',
        width:90,
        height:30,
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    iconRemove:{
        backgroundColor:'#f7f7f7',
        paddingVertical:2,
        paddingHorizontal:5
    },
    iconAdd:{
        backgroundColor:'#f7f7f7',
        paddingVertical:2,
        paddingHorizontal:5
    }

});