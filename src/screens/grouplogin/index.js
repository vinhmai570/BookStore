import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginStack from '../login';
import RegisterStack from '../register';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const GroupLogin=() => (
    <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginStack} options={{title:'ĐĂNG NHẬP',headerStyle: {
           
          },
          headerTintColor: '#fff', 
          }} />
        <Tab.Screen name="Register" component={RegisterStack} options={{title:'ĐĂNG KÝ',headerStyle: {
            
          },
          headerTintColor: '#fff', 
          }} />
    </Tab.Navigator>
)
export default GroupLogin;
const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        height:50,
        backgroundColor:'rgb(24, 158, 255)',
        alignItems:'center'
    },
    body:{
        
    }
})