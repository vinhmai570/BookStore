import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../home/index';
import OrderStack from '../order';
import NotificationStack from '../notification';
import AccountStack from '../account';
import SearchStack from '../search'
const Tab = createBottomTabNavigator();

const BaseScreen=() => (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = 'md-home';
            } else if (route.name === 'Search') {
                iconName = 'md-search';
            } else if (route.name === 'Account') {
                iconName = 'md-person';
            }
            else if (route.name === 'Notification') {
                iconName = 'md-notifications';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={30} fill={color} color={focused ? '#147efb' : '#ccc'} />; {/*#147efb*/}
        },
    })}
    tabBarOptions={{
        style: {
            paddingVertical: 10
        }
    }}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchStack} options={{title: 'Tìm kiếm'}} />
        <Tab.Screen name="Notification" component={NotificationStack} options={{title: 'Thông báo'}} />
        <Tab.Screen name="Account" component={AccountStack} options={{title: 'Tài khoản'}} />
    </Tab.Navigator>
)
export default BaseScreen;