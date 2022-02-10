import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStackNavigator } from './navigation/StackNavigator';

const App = () => {
    return (
        <>
            <NavigationContainer>
                <LoginStackNavigator />
            </NavigationContainer>
        </>
    );
};
export default App;
