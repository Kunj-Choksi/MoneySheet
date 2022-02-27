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
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingTop: 10,
                    paddingBottom: 10,
                },
            }}>
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
                name="Home"
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
