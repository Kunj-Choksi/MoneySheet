import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Analytics from '../analytics/Analytics';
import MonthlyPurchase from '../home/purchase/MonthlyPurchase';
import Home from '../home/Home';
import PurchaseAlter from '../home/alter/PurchaseAlter';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#008080',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
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
                    title: 'Alter Purchase',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
};

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Analytics" component={Analytics} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, ContactStackNavigator };
