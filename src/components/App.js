import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import BottomTabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

const App = () => {
    return (
        <>
            <Toast />
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        </>
    );
};
export default App;
