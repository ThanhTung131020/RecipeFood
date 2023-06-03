import * as React from 'react';
import { Settings, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../Screens'
const Stack = createStackNavigator();
const LoginStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ title: 'Đăng nhập' }} />
            <Stack.Screen name="Register" component={Register} options={{ title: 'Đăng nhập' }} />

        </Stack.Navigator>
    );
}
export default LoginStackScreen;
