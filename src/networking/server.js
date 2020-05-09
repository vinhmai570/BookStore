import React,{Component} from 'react';
import {AppRegistry,SectionList,StyleSheet,Text,View,Alert} from 'react-native';

const apiGetAllProducts='http://mybook.maitrongvinh.tk/index.php/getproducts';

async function getProductsFromServer(){
    
    try {
        let response=await fetch(apiGetAllProducts);
        let responseJson=await response.json();
        return responseJson;
    } catch (error) {
        console.error(`error is :${error}`);
    }
}
export {getProductsFromServer};