import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BaseScreen from '../screens/base';
import LoginScreen from '../screens/login/index';
import DetailsScreen from '../screens/details/index';
import ProfileScreen from '../screens/profile/index';
import CartScreen from '../screens/cart';


const Stack = createStackNavigator();

function AppNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Base" component={BaseScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;