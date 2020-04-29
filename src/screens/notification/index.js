import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from './notification.screen';

const Stack = createStackNavigator();

const NotificationStack= () =>(
    <Stack.Navigator>
        <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
    </Stack.Navigator>
);
export default NotificationStack;