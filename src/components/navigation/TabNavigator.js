import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    HomeStackNavigator,
    SummeryStackNavigator,
} from '../navigation/StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator defaultScreenOptions="Summery" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Summary" component={SummeryStackNavigator} />
            <Tab.Screen name="Home" component={HomeStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
