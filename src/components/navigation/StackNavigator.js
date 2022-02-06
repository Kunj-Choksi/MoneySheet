import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MonthlyPurchase from '../home/purchase/MonthlyPurchase';
import Home from '../home/Home';
import PurchaseAlter from '../home/alter/PurchaseAlter';
import Summery from '../analytics/Summery';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#008080',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
};

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
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
                    title: 'Modify Purchase',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
};

const SummeryStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Summery"
                component={Summery}
                options={{
                    title: 'Welcome Aboard Sire!',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
};

export { HomeStackNavigator, SummeryStackNavigator };
