import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './search.screen';

const Stack = createStackNavigator();

const SearchStack= () =>(
    <Stack.Navigator>
        <Stack.Screen name="SearchSceen" component={SearchScreen}/>
    </Stack.Navigator>
);
export default SearchStack;
