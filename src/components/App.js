import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import BottomTabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import Login from './user/Login';

const App = () => {
    const isUserLoggedIn = () => {
        return false;
    };
    return (
        <>
            <Toast />
            {isUserLoggedIn() ? (
                <NavigationContainer>
                    <DrawerNavigator />
                </NavigationContainer>
            ) : (
                <Login />
            )}
        </>
    );
};
export default App;
