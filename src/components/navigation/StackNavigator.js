import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MonthlyPurchase from '../home/purchase/MonthlyPurchase';
import Home from '../home/Home';
import PurchaseAlter from '../home/alter/PurchaseAlter';
import Summery from '../analytics/Summery';
import Login from '../user/Login';
import BottomTabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#f8ab7f',
    },
    headerTintColor: 'black',
    headerBackTitle: 'Back',
};

const LoginStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Dashboard"
                component={BottomTabNavigator}
            />
        </Stack.Navigator>
    );
};

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ ...screenOptionStyle, headerLeft: false }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Welcome Aboard',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="MonthlyPurchase"
                component={MonthlyPurchase}
                options={({ route }) => ({
                    title: `${route.params.title}`,
                    headerTitleAlign: 'center',
                })}
            />
            <Stack.Screen
                name="AlterPurchase"
                component={PurchaseAlter}
                options={{
                    title: 'Where did you spent?',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
};

const SummeryStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ ...screenOptionStyle, headerLeft: false }}>
            <Stack.Screen
                name="Summery"
                component={Summery}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export { HomeStackNavigator, SummeryStackNavigator, LoginStackNavigator };
