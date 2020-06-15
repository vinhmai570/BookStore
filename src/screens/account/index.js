import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './account.screen';

const Stack = createStackNavigator();

const AccountStack=() => (
    <Stack.Navigator>
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{title:'Cá nhân',headerStyle: {
            backgroundColor:'rgb(24, 158, 255)',
          },
          headerTintColor: '#fff', 
          }}/>
    </Stack.Navigator>
)
export default AccountStack;