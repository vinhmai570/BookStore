import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './register.screen';

const Stack = createStackNavigator();

const RegisterStack= () =>(
    <Stack.Navigator>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
);
export default RegisterStack;