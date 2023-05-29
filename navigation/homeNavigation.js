import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { ImagePickerIOS } from 'react-native';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { HomeScreen, Dlts } from '../Screens'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'trang chủ' }} />
            <Stack.Screen name="DetailsScreen" component={Dlts} options={{ title: 'chi tiết món ăn' }} />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    items: {

        marginVertical: 5,

    }

});
export default MyStack;
