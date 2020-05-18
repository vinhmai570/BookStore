import React,{Component} from 'react';
import {AppRegistry,SectionList,StyleSheet,Text,View,Alert} from 'react-native';


async function getAPIFromServer(api){
    try {
        let response=await fetch(api);
        let responseJson=await response.json();
         return responseJson;
    } catch (error) {
        console.error(`error is :${error}`);
    }
}
export {getAPIFromServer};