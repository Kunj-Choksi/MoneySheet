import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Analytics from '../analytics/Analytics';
import MonthlyPurchase from '../monthwise/MonthlyPurchase';
import MonthList from '../monthwise/MonthList';
import PurchaseAlter from '../monthwise/PurchaseAlter';

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
                name="MonthList"
                component={MonthList}
                options={{title: 'Month List'}}
            />
            <Stack.Screen
                name="MonthlyPurchase"
                component={MonthlyPurchase}
                options={{title: 'Month Wise Purchase'}}
            />
            <Stack.Screen
                name="AlterPurchase"
                component={PurchaseAlter}
                options={{title: 'Alter Purchase'}}
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

export {MainStackNavigator, ContactStackNavigator};
