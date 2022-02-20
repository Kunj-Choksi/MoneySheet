import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    HomeStackNavigator,
    SummeryStackNavigator,
} from '../navigation/StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            defaultScreenOptions="Summery"
            screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Summary"
                component={SummeryStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name="finance"
                                color={color}
                                size={size}></MaterialCommunityIcons>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Landing"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}></MaterialCommunityIcons>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
