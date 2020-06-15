import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from './order.screen';

const Stack = createStackNavigator();

const OrderStack= () =>(
    <Stack.Navigator>
        <Stack.Screen name="OrderScreen" component={OrderScreen} options={{title:'Lịch sử đặt hàng'}}/>
    </Stack.Navigator>
);
export default OrderStack;
