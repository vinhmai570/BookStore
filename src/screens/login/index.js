import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login.screen.js';

const Stack = createStackNavigator();

const LoginStack= () =>(
    <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{headerShown: false}}/>
    </Stack.Navigator>
);
export default LoginStack;