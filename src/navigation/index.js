import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import BaseScreen from '../screens/base';
import LoginScreen from '../screens/login/index';
import DetailsScreen from '../screens/details/index';
import ProfileScreen from '../screens/profile/index';
import CartScreen from '../screens/cart';
import ListProductsScreen from '../screens/listproducts';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function AppNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Base" component={BaseScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
                <Stack.Screen name="Cart" component={CartScreen} options={{title:'Giỏ hàng',headerStyle: {
            backgroundColor:'rgb(24, 158, 255)',
          },
          headerTintColor: '#fff', 
          
          }}/>
                <Stack.Screen name="ListProducts" component={ListProductsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;